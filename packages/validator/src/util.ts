import {
  booleanGenerateType,
  booleanGenerateValidation,
  booleanSetDefaults,
  BooleanValidation,
} from "./rules/boolean";
import {
  numberGenerateType,
  numberGenerateValidation,
  numberSetDefaults,
  NumberValidation,
} from "./rules/number";
import {
  stringGenerateType,
  stringGenerateValidation,
  stringSetDefaults,
  StringValidation,
} from "./rules/string";

export type ValidationSchema = {
  [s: string]: StringValidation | NumberValidation | BooleanValidation;
};

/**
 * Strict enforces that only known keys may be provided
 */
export interface ValidationOptions {
  strict?: boolean;
}

export const generators = {
  string: {
    defaults: stringSetDefaults,
    types: stringGenerateType,
    validations: stringGenerateValidation,
  },
  number: {
    defaults: numberSetDefaults,
    types: numberGenerateType,
    validations: numberGenerateValidation,
  },
  boolean: {
    defaults: booleanSetDefaults,
    types: booleanGenerateType,
    validations: booleanGenerateValidation,
  },
};

export function optsSetDefaults(opts: ValidationOptions) {
  opts.strict = opts.strict === undefined ? true : opts.strict;
}

export function schemaSetDefaults(schema: ValidationSchema) {
  Object.values(schema).forEach(it => {
    generators[it.type].defaults(it as any);
  });
}

/**
 * Provide the necessary imports for generated content
 */
export function getBaseValidatorOutput(): string {
  return `
// GENERATED BY @lightbase/lbf

import { isNil } from "@lightbase/lbf";

`;
}
