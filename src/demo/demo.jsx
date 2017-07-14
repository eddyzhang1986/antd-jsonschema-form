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

class Demo extends Component
{
    constructor(props){
      super(props);
      this.state={
         formData={

         }
      }
    }
    render(){
     const {formData}=this.state;
       return <Form
       formData={formData}
       onChange={(e,newData,fieldPath)=>{
         console.log(newData);
         this.setState({
             formData:newData
         });
       }}
       />
    }

}

render((
<div>
  <Demo />
</div>
), document.getElementById("main"));