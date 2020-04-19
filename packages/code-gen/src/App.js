import { newLogger, printProcessMemoryUsage } from "@lbu/insight";
import { isNil, newTemplateContext } from "@lbu/stdlib";
import { promises } from "fs";
import { join } from "path";
import { lowerCaseFirst, upperCaseFirst } from "./utils.js";

const { writeFile } = promises;

/**
 * @typedef {object} AppOpts
 * @property {GeneratorPlugin[]} generators
 * @property {object[]} types
 * @property {boolean} [verbose]
 * @property {boolean} [useTypescript]
 * @property {string} outputDir
 */

/**
 * @typedef {object} GeneratorPlugin
 * @property {string} name
 * @property {function(App): void|Promise<void>} [init]
 * @property {function(App): void|Promise<void>} [preProcessStore]
 * @property {function(App, object, ...object): void|Promise<void>} [dumpStore]
 * @property {function(App, object):
 *   GeneratedFile[]|GeneratedFile|Promise<GeneratedFile[]|GeneratedFile>} [generate]
 */

/**
 * @typedef {object} GeneratedFile
 * @property {string} path
 * @property {string} source
 */

/**
 * @class
 */
export class App {
  /**
   * @param {AppOpts} options
   */
  constructor({ verbose, generators, types, ...rest }) {
    /**
     * @public
     * @type {Map<string, GeneratorPlugin>}
     */
    this.generators = new Map();

    /**
     * @public
     * @type {object[]}
     */
    this.types = types || [];

    /**
     * @public
     * @type {object}
     */
    this.options = rest;

    /**
     * @public
     * @type {boolean}
     */
    this.verbose = verbose || false;

    /**
     * @public
     * @type {Logger}
     */
    this.logger = newLogger({
      ctx: {
        type: "code_gen",
      },
      depth: 8,
    });

    /**
     * @public
     * @type {TemplateContext}
     */
    this.templateContext = newTemplateContext();

    /**
     * @type {object[]}
     */
    this.extendsList = [];

    this._generatorList = generators;
  }

  /**
   * Init generators and validate types
   * @return {Promise<void>}
   */
  async init() {
    this.templateContext.globals["upperCaseFirst"] = upperCaseFirst;
    this.templateContext.globals["lowerCaseFirst"] = lowerCaseFirst;

    for (const g of this._generatorList) {
      if (isNil(g.name)) {
        throw new Error("Generator is missing name");
      }

      this.generators.set(g.name, g);
    }

    await this.callGeneratorMethod("registerTypes");

    const enabledTypes = [];
    for (const type of this.types) {
      if (isNil(type.name)) {
        throw new Error("Type is missing name");
      }
      enabledTypes.push(type.name);
    }

    if (this.verbose) {
      this.logger.info("registered plugins: ", {
        generators: [...this.generators.keys()],
        types: enabledTypes,
      });
    }

    await this.callGeneratorMethod("init");
  }

  extend(data) {
    this.extendsList.push(data);
    return this;
  }

  /**
   * Preprocess and create a dump that includes all other 'extends' stores
   * @return {object}
   */
  async dump() {
    await this.callGeneratorMethod("preProcessStore");

    const externalResult = {};
    await this.callGeneratorMethod(
      "dumpStore",
      externalResult,
      ...this.extendsList,
    );

    return externalResult;
  }

  /**
   * Run the generate methods on the plugins
   * Uses dump internally
   */
  async generate() {
    if (isNil(this.options.outputDir)) {
      throw new Error("Please specify the outputDir in the App options");
    }
    this.options.fileHeader = `// Generated by @lbu/code-gen at ${new Date().toISOString()}\n${
      this.options.fileHeader || ""
    }`;

    // Dump and copy, just to make sure we are working with a clean slate
    const input = JSON.parse(JSON.stringify(await this.dump()));
    const files = await this.callGeneratorMethod("generate", input);

    const flattenedFiles = [];

    for (const file of files) {
      if (!Array.isArray(file)) {
        flattenedFiles.push(file);
      } else {
        flattenedFiles.push(...file);
      }
    }

    for (const file of flattenedFiles) {
      const path = join(this.options.outputDir, file.path);
      await writeFile(path, file.source, { encoding: "utf-8" });
    }

    printProcessMemoryUsage(this.logger);
  }

  /**
   * Call a method on all known generator plugins
   * Will pass this.options as the first argument
   * @private
   * @param {string} method
   * @param {...*} args
   */
  async callGeneratorMethod(method, ...args) {
    const result = [];

    for (const generator of this.generators.values()) {
      if (method in generator) {
        if (this.verbose) {
          this.logger.info(`generator: calling ${method} on ${generator.name}`);
        }
        result.push(await generator[method](this, ...args));
      }
    }

    return result;
  }
}
