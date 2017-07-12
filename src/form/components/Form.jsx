import React, { Component } from "react";
import PropTypes from "prop-types";




const uiSchema = {
    "xType": "grid",
    "children": [{
        "xType": "row",
        "children": {
            "xType": "field",
            "props": {
                "fPath": "/title"
            }
        }

    }, {
        "xType": "row",
        "children": {
            "xType": "field",
            "props": {
                "fPath": "/done"
            }
        }
    }]

}

const schema = {

    "type": "object",
    "properties": {


    }

}


const widgetMap = {



}


/**
 * 
 * @param {*} props 
 */
const VisitField = (props) => {
    const { schema, uiSchema } = props;
    const { fPath } = uiSchema;
    const offSpringSchema = getOffspringSchema(schema, fPath);
    return <Widget offSpringSchema={offSpringSchema} />
}
/**
 * visit ui schema
 * @param {*} props 
 */
const Visitor = (props) => {
    const { schema, uiSchema } = props;
    let result = null;
    switch (uiSchema.xType) {

        case "grid":
            result = <VisitGrid schema={schema} uiSchema={uiSchema} />
            break;
        case "row":
            result = <VisitRow schema={schema} uiSchema={uiSchema} />
            break;
        case "cls":
            result = <VisitCls schema={schema} uiSchema={uiSchema} />
            break;
        case "tab":
            result = <VisitTab schema={schema} uiSchema={uiSchema} />
            break;
        case "field":
            result = <VisitField schema={schema} uiSchema={uiSchema} />
            break;
        default:
            break;
    }

}

export default class Form extends Component {

    render() {
        return <div>
            <Visitor schema={schema}
                uiSchema={uiSchema} />
        </div>
    }
}