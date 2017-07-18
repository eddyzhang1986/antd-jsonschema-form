import React from "react";
import setimmediate1 from "setimmediate";


/**
 * setimmediate
 */
const setimmediate = () => {

  if ((typeof setimmediate1) === "function") {
    return setimmediate1
  } else if (window.setImmediate) {
    return window.setImmediate
  } else {
    window.setImmediate = function (func, args) {
      return window.setTimeout(func, 0, args);
    };
    return window.setImmediate
  }
}

export {
  setimmediate as setimmediate
}