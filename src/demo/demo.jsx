import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from 'antd';

import Form from '../form/index.jsx';

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

function sleep(time){

 return new Promise((resolve,reject)=>{
     window.setTimeout(()=>{
       resolve();
     },time)
   
 })

}


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "/done": "test"
      }
    }
  }


  async changeFormData() {

    await sleep(1000);
    this.setState({

      formData: {
        "/done":"e"
      }
    })

  }

  render() {
    const { formData } = this.state;
    return <div>
      <Form
      formData={formData}
      onChange={(e, newData, fieldPath) => {
        //console.log(newData);
        this.setState({
          formData: newData
        }, () => {
          console.log(this.state.formData, "formData");
        });
      }}
    />
    <input type="button" onClick={()=>{
      this.changeFormData();
    }} value="test"/>
    </div>
  }

}

render((
  <div>
    <Demo />
  </div>
), document.getElementById("main"));