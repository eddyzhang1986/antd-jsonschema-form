import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Col, Tabs } from 'antd';
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
    return <div>Widget</div>
}


const getOffspringSchema = (schema, fPath) => {

    return "test"
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

const VisitGrid = (props) => {
    const { schema, uiSchema } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} />
    }

    return <div>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} />
            })
        }
    </div>
}

const VisitRow = (props) => {
    const { schema, uiSchema } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} />
    }

    return <Row>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} />
            })
        }
    </Row>
}


const VisitCol = (props) => {
    const { schema, uiSchema } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }


    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} />
    }

    return <Col>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} />
            })
        }
    </Col>
}



const VisitTab = (props) => {
    const { schema, uiSchema } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} />
    }

    return <Tab defaultActiveKey="0">
        {
            children.map((item, index) => {
                return <TabPane key={index} tab={index} key={index}>
                    <Visit key={index} schema={schema} uiSchema={item} />
                </TabPane>
            })
        }
    </Tab>
}

const VisitFieldSet = (props) => {
    const { schema, uiSchema } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} />
    }

    return <div>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} />
            })
        }
    </div>
}

/**
 * visit ui schema
 * @param {*} props 
 */
const Visit = (props) => {

    const { schema, uiSchema } = props;

    let result = null;
    switch (uiSchema.xType) {

        case "grid":
            result = <VisitGrid schema={schema} uiSchema={uiSchema} />
            break;
        case "row":
            result = <VisitRow schema={schema} uiSchema={uiSchema} />
            break;
        case "col":
            result = <VisitCol schema={schema} uiSchema={uiSchema} />
            break;
        case "tab":
            result = <VisitTab schema={schema} uiSchema={uiSchema} />
            break;
        case "fieldset":
            result = <VisitFieldSet schema={schema} uiSchema={uiSchema} />
        case "field":
            result = <VisitField schema={schema} uiSchema={uiSchema} />
            break;
        default:
            break;
    }

    return result;

}

export default class Form extends Component {

    render() {
        return <div>
            <Visit schema={schema}
                uiSchema={uiSchema} />
        </div>
    }
}