import { cpus } from "os";
import { executeCodeModVZeroDotZeroDotHundredFortyTwo } from "./mods/v0.0.142.js";

export const PARALLEL_COUNT = Math.max(cpus().length - 1, 1);

/**
 * @type {Object<string, {
 *    description: string,
 *    exec: function(event: InsightEvent, verbose: boolean): Promise<void>
 * }>}
 */
export const codeModMap = {
  "v0.0.142": {
    description:
      "Convert arguments in call sites of generated react-query hooks, to pass in a single argument object.",
    exec: executeCodeModVZeroDotZeroDotHundredFortyTwo,
  },
};
