import React from "react";
import "setimmediate";


export function getDefaultRegistry() {
  return {
    fields: require("./components/fields").default,
    widgets: require("./components/widgets").default,
    definitions: {},
    formContext: {},
  };
}