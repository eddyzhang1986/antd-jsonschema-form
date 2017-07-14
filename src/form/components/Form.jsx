import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Col, Tabs, Input } from 'antd';
const TabPane = Tabs.TabPane;




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


const Widget = (props) => {
    const { onChange, onBlur } = props;
    return <Input
        onChange={(e) => {
            if (onChange) {
                onChange(e);
            }
        }}
        onBlur={(e) => {
            if (onBlur) {
                onBlur(e);
            }
        }} />
}


const getOffspringSchema = (schema, fPath) => {

    return "test"
}

/**
 * 
 * @param {*} props 
 */
const VisitField = (props) => {
    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;
    const { fPath } = uiSchema;
    const offSpringSchema = getOffspringSchema(schema, fPath);
    return <Widget offSpringSchema={offSpringSchema} onChange={onChange} onBlur={onBlur} />
}

const VisitGrid = (props) => {
    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} onChange={onChange} onBlur={onBlur} />
    }

    return <div>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} onChange={onChange} onBlur={onBlur} />
            })
        }
    </div>
}

const VisitRow = (props) => {
    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} onChange={onChange} onBlur={onBlur} />
    }

    return <Row>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} onChange={onChange} onBlur={onBlur} />
            })
        }
    </Row>
}


const VisitCol = (props) => {
    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }


    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} onChange={onChange} onBlur={onBlur} />
    }

    return <Col>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} onChange={onChange} onBlur={onBlur} />
            })
        }
    </Col>
}



const VisitTab = (props) => {
    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} onChange={onChange} onBlur={onBlur} />
    }

    return <Tab defaultActiveKey="0">
        {
            children.map((item, index) => {
                return <TabPane key={index} tab={index} key={index}>
                    <Visit key={index} schema={schema} uiSchema={item} onChange={onChange} onBlur={onBlur} />
                </TabPane>
            })
        }
    </Tab>
}

const VisitFieldSet = (props) => {
    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} onChange={onChange} onBlur={onBlur} />
    }

    return <div>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} onChange={onChange} onBlur={onBlur} />
            })
        }
    </div>
}

/**
 * visit ui schema
 * @param {*} props 
 */
const Visit = (props) => {

    const { schema, uiSchema, onChange, onBlur, ...otherProps } = props;


    let result = null;
    switch (uiSchema.xType) {

        case "grid":
            result = <VisitGrid schema={schema} uiSchema={uiSchema} onChange={onChange} onBlur={onBlur} />
            break;
        case "row":
            result = <VisitRow schema={schema} uiSchema={uiSchema} onChange={onChange} onBlur={onBlur} />
            break;
        case "col":
            result = <VisitCol schema={schema} uiSchema={uiSchema} onChange={onChange} onBlur={onBlur} />
            break;
        case "tab":
            result = <VisitTab schema={schema} uiSchema={uiSchema} onChange={onChange} onBlur={onBlur} />
            break;
        case "fieldset":
            result = <VisitFieldSet schema={schema} uiSchema={uiSchema} onChange={onChange} onBlur={onBlur} />
        case "field":
            result = <VisitField
                schema={schema}
                uiSchema={uiSchema}
                onChange={onChange}
                onBlur={onBlur} />
            break;
        default:
            break;
    }

    return result;

}

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {

            }
        }
    }
    render() {
        const { formData } = this.state;
        return <div>
            <Visit schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                onChange={(e) => {
                    console.log(e.target.value, "onChange");
                }}
                onBlur={(e) => {
                    console.log(e.target.value, "onBlur");
                }} />

        </div>
    }
}