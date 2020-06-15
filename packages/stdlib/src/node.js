import { exec as cpExec, spawn as cpSpawn } from "child_process";
import { lstatSync, promises, readdirSync } from "fs";
import { join } from "path";
import { promisify } from "util";

const { lstat, readdir } = promises;
const internalExec = promisify(cpExec);

export { join as pathJoin };

/**
 * @callback Exec
 * @param {string} command
 * @returns {Promise<object<{stdout: string, stderr: string}>>}
 */
export function exec(command) {
  return internalExec(command, { encoding: "utf8" });
}

/**
 * @param {string} command
 * @param {string[]} args
 * @param {object} [opts={}]
 * @returns {Promise<{code: number|undefined}>}
 */
export function spawn(command, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const sp = cpSpawn(command, args, { stdio: "inherit", ...opts });

    sp.once("error", reject);
    sp.once("exit", (code) => {
      resolve({ code: code === null ? undefined : code });
    });
  });
}

/**
 * @param {string} dir
 * @param {Function} cb
 * @param {ProcessDirectoryOptions} [opts]
 */
export async function processDirectoryRecursive(
  dir,
  cb,
  opts = {
    skipDotFiles: true,
    skipNodeModules: true,
  },
) {
  for (const file of await readdir(dir, { encoding: "utf8" })) {
    if (opts.skipNodeModules && file === "node_modules") {
      continue;
    }
    if (opts.skipDotFiles && file[0] === ".") {
      continue;
    }

    const newPath = join(dir, file);
    const stat = await lstat(newPath);
    if (stat.isDirectory()) {
      await processDirectoryRecursive(newPath, cb, opts);
    } else if (stat.isFile()) {
      await Promise.resolve(cb(newPath));
    }
  }
}

/**
 * Sync version of processDirectoryRecursive
 *
 * @param {string} dir
 * @param {Function} cb
 * @param {object} [opts={}]
 * @param {boolean} [opts.skipNodeModules=true]
 * @param {boolean} [opts.skipDotFiles=true]
 */
export function processDirectoryRecursiveSync(
  dir,
  cb,
  opts = {
    skipDotFiles: true,
    skipNodeModules: true,
  },
) {
  for (const file of readdirSync(dir, { encoding: "utf8" })) {
    if (opts.skipNodeModules && file === "node_modules") {
      continue;
    }
    if (opts.skipDotFiles && file[0] === ".") {
      continue;
    }

    const newPath = join(dir, file);
    const stat = lstatSync(newPath);
    if (stat.isDirectory()) {
      processDirectoryRecursiveSync(newPath, cb, opts);
    } else if (stat.isFile()) {
      cb(newPath);
    }
  }
}
