import React from "react";
import setimmediate1 from "setimmediate";
import JSONPath from "jsonpath-plus";

/**
 * setimmediate
 */
const setimmediate = (() => {

  if ((typeof setimmediate1) === "function") {
    //console.log('1')
    return setimmediate1
  } else if (window.setImmediate) {
    //console.log('2')
    return window.setImmediate
  } else {
    //console.log('3')
    window.setImmediate = function (func, args) {
      return window.setTimeout(func, 0, args);
    };
    return window.setImmediate
  }

})()


/**
 * 
 * @param {*} schema 
 * @param {*} fieldPath 
 */
const getOffspringSchema = (schema, fieldPath) => {
  //console.log(schema, "schema");
  //let path = "$" + fieldPath.replace(/\//g, ".properties.")
  //console.log(path, 'path');
  //let result = JSONPath({ json: schema, path: path });

  let result = schema[fieldPath];
  return result;
}

/**
 * 
 * @param {*} formData 
 * @param {*} fieldPath 
 */
const getFormValue = (formData, fieldPath) => {
  //console.log(formData, "formData");
  return formData[fieldPath]
}


/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
const deepCompare = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}


export {
  setimmediate as setimmediate,
  getOffspringSchema as getOffspringSchema,
  getFormValue as getFormValue,
  deepCompare as deepCompare
}