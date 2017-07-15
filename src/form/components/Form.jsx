import React, { Component } from "react";
import update from 'react-addons-update';
import PropTypes from "prop-types";
import setimmediate from 'setimmediate';
import _ from 'lodash';

import { Row, Col, Tabs, Input } from 'antd';
const TabPane = Tabs.TabPane;




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

const schema = {

    "type": "object",
    "properties": {


    }

}


const widgetMap = {



}

const getOffspringSchema = (schema, fieldPath) => {
    //console.log(schema, "schema");
    return "test"
}

const getFormValue = (formData, fieldPath) => {
    //console.log(formData, "formData");
    return formData[fieldPath]
}



const Widget = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { fieldPath } = uiSchema;
    const offSpringSchema = getOffspringSchema(schema, fieldPath);
    const formValue = getFormValue(formData, fieldPath);

    const value = (formValue || offSpringSchema.default);


    const valueProps = { value: (value || undefined) };
    //console.log(valueProps, "valueProps");

    return <Input
        {...valueProps}
        onChange={(e) => {
            onChange(e, fieldPath);
        }}
        onBlur={(e) => {
            onBlur(e, fieldPath);
        }}
    />
}




/**
 * 
 * @param {*} props 
 */
const VisitField = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    return <Widget schema={schema} uiSchema={uiSchema} formData={formData} onChange={onChange} onBlur={onBlur} />
}

const VisitGrid = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} formData={formData} onChange={onChange} onBlur={onBlur} />
    }

    return <div>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </div>
}

const VisitRow = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} formData={formData} onChange={onChange} onBlur={onBlur} />
    }

    return <Row>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </Row>
}


const VisitCol = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }


    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} formData={formData} onChange={onChange} onBlur={onBlur} />
    }

    return <Col>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </Col>
}



const VisitTab = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} formData={formData} onChange={onChange} onBlur={onBlur} />
    }

    return <Tab defaultActiveKey="0">
        {
            children.map((item, index) => {
                return <TabPane key={index} tab={index} key={index}>
                    <Visit key={index} schema={schema} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
                </TabPane>
            })
        }
    </Tab>
}

const VisitFieldSet = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Visit schema={schema} uiSchema={children} formData={formData} onChange={onChange} onBlur={onBlur} />
    }

    return <div>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </div>
}

/**
 * visit ui schema
 * @param {*} props 
 */
const Visit = (props) => {

    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;


    let result = null;
    switch (uiSchema.xType) {

        case "grid":
            result = <VisitGrid schema={schema} uiSchema={uiSchema} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "row":
            result = <VisitRow schema={schema} uiSchema={uiSchema} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "col":
            result = <VisitCol schema={schema} uiSchema={uiSchema} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "tab":
            result = <VisitTab schema={schema} uiSchema={uiSchema} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "fieldset":
            result = <VisitFieldSet schema={schema} uiSchema={uiSchema} formData={formData} onChange={onChange} onBlur={onBlur} />
        case "field":
            result = <VisitField
                schema={schema}
                uiSchema={uiSchema}
                formData={formData}
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
            formData: this.props.formData || {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.formData, nextProps.formData)) {
            this.setState({
                formData: nextProps.formData
            })
        }
    }
    render() {

        const { onChange, onBlur } = this.props;
        const { formData } = this.state;

        return <div>
            <Visit schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                onChange={(e, fieldPath) => {
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onChange");

                    const newData = update(formData, {
                        [fieldPath]: { $set: e.target.value }
                    });

                    this.setState({
                        formData: newData
                    }, () => {
                        if (onChange) {
                            setImmediate(() => {
                                onChange(e, newData, fieldPath);
                            });
                        }
                        //console.log(JSON.stringify(this.state.formData));
                    });

                }}

                onBlur={(e, fieldPath) => {
                    if (onBlur) {
                        setImmediate(() => {
                            onBlur(e, formData, fieldPath);
                        });
                    }
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onBlur");
                }} />

        </div>
    }
}