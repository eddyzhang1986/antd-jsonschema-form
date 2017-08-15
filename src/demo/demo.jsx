import React, { Component } from "react";
import { render } from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from 'antd';
import Editor from '../form/components/Editor'

// import { Input } from 'antd';
// const { TextArea } = Input;



import Form from '../form/index.jsx';
//import TestTabs from './tabtest/TabTest'

const tabUiSchema = {
  "xType": "tab",
  "children": [
    {
      "xType": "grid",
      "panelProps": {
        "tab": "test1"
      },
      "children": {
        "xType": "field",
        "fieldPath": "/fields/empNo"
      }
    },
    {
      "xType": "grid",
      "panelProps": {
        "tab": "test2"
      },
      "children": {
        "xType": "field",
        "fieldPath": "/fields/age"
      }
    },
    {
      "xType": "grid",
      "panelProps": {
        "tab": "test3"
      }
    },
    {
      "xType": "grid",
      "panelProps": {
        "tab": "test6"
      }
    }
  ]
}

const schema = {

  "type": "object",
  "properties": {
    "fields": {
      "properties": {
        "dateRange": {
          "type": "object",
          "title": "Date Range"
        },
        "groupNo": {
          "type": "string",
          "title": "Group No"
        },
        "empNo": {
          "type": "string",
          "title": "Emp No"
        },
        "empName": {
          "type": "string",
          "title": "Emp Name"
        },
        "beforeName": {
          "type": "string",
          "title": "Before Name"
        },
        "enName": {
          "type": "string",
          "title": "En Name"
        },
        "zhName": {
          "type": "string",
          "title": "Zh Name"
        },
        "pinYin": {
          "type": "string",
          "title": "Pin Yin"
        },
        "enName2": {
          "type": "string",
          "title": "En Name2"
        },
        "IDNumber": {
          "type": "string",
          "title": "ID Number"
        },
        "sex": {
          "type": "string",
          "title": "sex"
        },
        "birthDay": {
          "type": "string",
          "title": "Birth Day"
        },
        "age": {
          "type": "string",
          "title": "Age"
        },
        "country": {
          "type": "string",
          "title": "Country"
        },
        "maritalStatus": {
          "type": "string",
          "title": "Marital Status"
        },
        "nation": {
          "type": "string",
          "title": "Nation"
        },
        "political": {
          "type": "string",
          "title": "Political"
        },
        "joinDate": {
          "type": "string",
          "title": "Join Date"
        },
        "household": {
          "type": "string",
          "title": "Household"
        },
        "bloodType": {
          "type": "string",
          "title": "Blood Type"
        }
      }
    }
  }

}




const uiSchema = {
  "xType": "grid",
  "children": [{
    "xType": "row",
    "gutter": 16,
    "children": [{
      "xType": "col",
      "span": 18
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "date-range",
        "fieldPath": "/fields/dateRange"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/groupNo"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/empNo"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/empName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/beforeName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/enName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/zhName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/pinYin"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/enName2"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/IDNumber"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/sex"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "date-time",
        "fieldPath": "/fields/birthDay"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "updown",
        "fieldPath": "/fields/age"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/country"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/maritalStatus"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/nation"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/political"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/joinDate"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/household"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "textarea",
        "fieldPath": "/fields/bloodType"
      }
    }]

  }]

}


function sleep(time) {

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve();
    }, time)

  })

}

/**
 * Demo
 */
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: schema,
      uiSchema: uiSchema,
      formData: {
        "/fields/groupNo": "0001",
        "/fields/empNo": "0003",
        "/fields/age": 20,
        "/fields/birthDay": "2017-07-19 10:10:10",
        "/fields/dateRange": {
          beginDate: "2017-07-07",
          endDate: "2017-07-07"
        }
      },
      edit: true
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

    const { edit, formData } = this.state;
    return <div>
      <Form
        schema={this.state.schema}
        uiSchema={this.state.uiSchema}
        edit={edit}
        formData={formData}
        onChange={(e, newValue, newData, fieldPath) => {
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
      {edit ? <div>
        <input type="button" onClick={() => {
          this.setState({
            edit: false
          })
        }} value="ok" />
        <input type="button" onClick={() => {
          this.setState({
            formData: (this.formDataCache || {}),
            edit: false
          })
        }} value="cancel" />
      </div> : <div>
          <input type="button" onClick={() => {
            this.formDataCache = this.state.formData;
            this.setState({
              edit: true
            })
          }} value="edit" />
        </div>}
      <div>
        <input type="button" onClick={() => {
          this.changeFormData();
        }} value="setEmptyValueAsync" />
      </div>

      <div>
        <div>schema</div>
        <div><Editor
          onChange={
            (code) => {
              this.setState({
                schema: JSON.parse(code)
              });
            }
          } value={JSON.stringify(this.state.schema, null, 2)} /></div>
      </div>
      <div>
        <div>uiSchema</div>
        <div><Editor
          onChange={
            (code) => {
              //console.log(code,'code')
              this.setState({
                uiSchema: JSON.parse(code)
              });
            }
          } value={JSON.stringify(this.state.uiSchema, null, 2)} /></div>
      </div>
      <div>
        <div>formData</div>
        <div><Editor
          onChange={
            (code) => {
              console.log(code, 'code');
              this.setState({
                formData: JSON.parse(code)
              });
            }
          } value={JSON.stringify(formData, null, 2)} /></div>
      </div>


    </div>
  }

}

render((
  <div>
    <Demo />
  </div>
), document.getElementById("main"));