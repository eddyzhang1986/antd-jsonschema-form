import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from 'antd';

import Form from '../form/index.jsx';


const schema = {

  "type": "object",
  "properties": {


  }

}


const uiSchema = {
  "xType": "grid",
  "children": [{
    "xType": "row",
    "children": {
      "xType": "col",
      "children": {
        "xType": "field",
        "fieldPath": "/title"
      }

    }

  }, {
    "xType": "row",
    "children": {
      "xType": "col",
      "children": [{
        "xType": "field",
        "fieldPath": "/done"
      }, {
        "xType": "field",
        "fieldPath": "/work"
      }]
    }
  }]

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

function sleep(time) {

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve();
    }, time)

  })

}


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "/done": "2017-07-19"
      }
    }
  }


  async changeFormData() {

    await sleep(1000);
    this.setState({

      formData: {

      }
    }, () => {
      console.log(this.state.formData, "setFormData");
    })

  }

  render() {
    const { formData } = this.state;
    return <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={(e, newValue, newData, fieldPath) => {
          //console.log(newData);
          this.setState({
            formData: newData
          }, () => {
            console.log(this.state.formData, "change");
          });
        }}
        onBlur={(e, newValue, newData, fieldPath) => {
          console.log(newData, 'blur');
        }}
      />
      <input type="button" onClick={() => {
        this.changeFormData();
      }} value="test" />
    </div>
  }

}

render((
  <div>
    <Demo />
  </div>
), document.getElementById("main"));