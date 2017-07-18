import React from "react";
import setimmediate1 from "setimmediate";


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


export {
  setimmediate as setimmediate
}