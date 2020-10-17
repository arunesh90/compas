// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

import {
  anonymousValidator0,
  anonymousValidator104,
  anonymousValidator105,
  anonymousValidator107,
  anonymousValidator12,
  anonymousValidator14,
  anonymousValidator18,
  anonymousValidator24,
  anonymousValidator29,
  anonymousValidator32,
  anonymousValidator35,
  anonymousValidator40,
  anonymousValidator45,
  anonymousValidator55,
  anonymousValidator59,
  anonymousValidator74,
  anonymousValidator80,
  anonymousValidator83,
  anonymousValidator92,
  anonymousValidator94,
  anonymousValidator98,
} from "../anonymous-validators.js";
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenAnyOfType | undefined, errors: (*[])|undefined}}
 */
export function anyOfType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator0(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenAnyType | undefined, errors: (*[])|undefined}}
 */
export function anyType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator14(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenArrayType | undefined, errors: (*[])|undefined}}
 */
export function arrayType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator18(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenBooleanType | undefined, errors: (*[])|undefined}}
 */
export function booleanType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator24(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenContext | undefined, errors: (*[])|undefined}}
 */
export function context(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator92(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenDateType | undefined, errors: (*[])|undefined}}
 */
export function dateType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator29(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenFile | undefined, errors: (*[])|undefined}}
 */
export function file(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator104(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenFileType | undefined, errors: (*[])|undefined}}
 */
export function fileType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator32(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenGenerateOpts | undefined, errors: (*[])|undefined}}
 */
export function generateOpts(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator94(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenGenericType | undefined, errors: (*[])|undefined}}
 */
export function genericType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator35(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenNumberType | undefined, errors: (*[])|undefined}}
 */
export function numberType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator40(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenObjectType | undefined, errors: (*[])|undefined}}
 */
export function objectType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator45(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenReferenceType | undefined, errors: (*[])|undefined}}
 */
export function referenceType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator59(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenRelationType | undefined, errors: (*[])|undefined}}
 */
export function relationType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator55(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenRouteType | undefined, errors: (*[])|undefined}}
 */
export function routeType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator83(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenStringType | undefined, errors: (*[])|undefined}}
 */
export function stringType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator74(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenStructure | undefined, errors: (*[])|undefined}}
 */
export function structure(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator98(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenTemplateState | undefined, errors: (*[])|undefined}}
 */
export function templateState(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator105(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenType | undefined, errors: (*[])|undefined}}
 */
export function type(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator12(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenTypeSettings | undefined, errors: (*[])|undefined}}
 */
export function typeSettings(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator107(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
/**
 * @param {undefined|*} value
 * @param {string|undefined} [propertyPath]
 * @returns {{ data: CodeGenUuidType | undefined, errors: (*[])|undefined}}
 */
export function uuidType(value, propertyPath = "$") {
  const errors = [];
  const data = anonymousValidator80(value, propertyPath, errors);
  if (errors.length > 0) {
    return { data: undefined, errors };
  }
  return { data, errors: undefined };
}
