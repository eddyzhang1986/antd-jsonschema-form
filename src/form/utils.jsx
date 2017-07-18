import React from "react";
import setimmediate1 from "setimmediate";


/**
 * setimmediate
 */
const setimmediate = () => {

  if ((typeof setimmediate1) === "function") {
    return setimmediate1
  }
  else if (typeof window.setImmediate) {
    return window.setImmediate
  } else {
    return window.setImmediate
  }
}

export {
  setimmediate as setimmediate
}