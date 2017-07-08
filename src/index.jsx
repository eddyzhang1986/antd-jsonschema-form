import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from 'antd';

import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
	title2: { type: "string", title: "Title", default: "A new task2" },
    done: { type: "boolean", title: "Done?", default: false }
  }
};

const log = (type) => console.log.bind(console, type);


export function sum(a, b) {
  return a + b;
}

/**
 * 导出测试发布到npm
 */
export default class FormTest extends Component {

  render() {
    return <Form schema={schema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} />
  }

}

/*
render((
<div>
  <DatePicker/>
  <Form schema={schema}
    safeRenderCompletion={true}
	noHtml5Validate={true}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")} />
</div>
), document.getElementById("main"));*/