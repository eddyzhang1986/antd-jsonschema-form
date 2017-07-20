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
    "layoutProps": {
      "gutter": 16
    },
    "children": [{
      "xType": "col",
      "layoutProps": {
        "span": 18
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/dateRange",
        "widget": "date-range"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/groupNo"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/empNo"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/empName"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/beforeName"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/enName"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/zhName"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/pinYin"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/enName2"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/IDNumber"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/sex"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "date",
        "fieldPath": "/fields/birthDay"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "updown",
        "fieldPath": "/fields/age"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/country"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/maritalStatus"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/nation"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/political"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/joinDate"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/household"
      }
    }, {
      "xType": "col",
      "layoutProps": {
        "span": 6
      },
      "children": {
        "xType": "field",
        "widget": "textarea",
        "fieldPath": "/bloodType"
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
      formData: {
        "/fields/birthDay": "2017-07-19"
      },
      edit: true
    }
  }


  async changeFormData() {
    await sleep(1000);
    this.setState({
      formData: {
        "/fields/dateRange": {
          beginDate: "2017-07-07",
          endDate: "2017-07-07"
        }
      }
    }, () => {
      console.log(this.state.formData, "setFormData");
    })
  }

  render() {
    const { edit, formData } = this.state;
    return <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
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
    </div>
  }

}

render((
  <div>
    <Demo />
  </div>
), document.getElementById("main"));