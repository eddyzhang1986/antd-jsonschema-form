import React, { Component } from "react";

import Codemirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";


import "codemirror/lib/codemirror.css";

 import "codemirror/theme/dracula.css";
 //import "codemirror/theme/blackboard.css";
// import "codemirror/theme/mbo.css";
// import "codemirror/theme/ttcn.css";
// import "codemirror/theme/solarized.css";
//import "codemirror/theme/monokai.css";
// import "codemirror/theme/eclipse.css";


// Patching CodeMirror#componentWillReceiveProps so it's executed synchronously
// Ref https://github.com/mozilla-services/react-jsonschema-form/issues/174
Codemirror.prototype.componentWillReceiveProps = function (nextProps) {
    if (
        this.codeMirror &&
        nextProps.value !== undefined &&
        this.codeMirror.getValue() != nextProps.value
    ) {
        this.codeMirror.setValue(nextProps.value);
    }
    if (typeof nextProps.options === "object") {
        for (var optionName in nextProps.options) {
            if (nextProps.options.hasOwnProperty(optionName)) {
                this.codeMirror.setOption(optionName, nextProps.options[optionName]);
            }
        }
    }
};


const cmOptions = {
    theme: "dracula",
    height: "auto",
    viewportMargin: Infinity,
    mode: {
        name: "javascript",
        json: true,
        statementIndent: 2,
    },
    lineNumbers: true,
    lineWrapping: true,
    indentWithTabs: false,
    tabSize: 2,
}


class Editor extends Component {


    render() {
        return <Codemirror
            options={cmOptions}
            onChange={this.props.onChange}
            value={this.props.value} />
    }

}

export default Editor;