import React, { Component } from "react";
import update from 'react-addons-update';
import PropTypes from "prop-types";
import { setimmediate } from '../utils';
import _ from 'lodash';

import Widget from './widgets/Widget';
import { Row, Col, Tabs } from 'antd';
const TabPane = Tabs.TabPane;







/**
 * 
 * @param {*} props 
 */
const Field = (props) => {
    const { uiSchema } = props;
    return <Col style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Col span={8} style={{ paddingLeft: "15px" }}>{uiSchema.fieldPath}</Col>
        <Col span={16}><Widget {...props} /></Col>
    </Col>
}


/**
 * 
 * @param {*} props 
 */
const VisitField = (props) => {
    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;
    return <Field schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
}

const VisitGrid = (props) => {
    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return <div  {...(uiSchema.layoutProps || {}) }>
        </div>
    }

    if (!Array.isArray(children)) {
        return <div  {...(uiSchema.layoutProps || {}) }>
            <Visit schema={schema} uiSchema={children} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
        </div>
    }

    return <div  {...(uiSchema.layoutProps || {}) }>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} edit={edit} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </div>
}

const VisitRow = (props) => {
    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return  <Row {...(uiSchema.layoutProps || {}) }>
        </Row>
    }

    if (!Array.isArray(children)) {
        return <Row {...(uiSchema.layoutProps || {}) }>
            <Visit schema={schema} uiSchema={children} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
        </Row>
    }

    return <Row {...(uiSchema.layoutProps || {}) }>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} edit={edit} uiSchema={item} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </Row>
}


const VisitCol = (props) => {
    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return <Col {...(uiSchema.layoutProps || {}) }>
        </Col>
    }


    if (!Array.isArray(children)) {
        return <Col {...(uiSchema.layoutProps || {}) }>
            <Visit schema={schema} uiSchema={children} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
        </Col>
    }

    return <Col {...(uiSchema.layoutProps || {}) }>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </Col>
}



const VisitTab = (props) => {
    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    /**
     * 没有子元素的Tab直接不存在这tabs
     */
    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Tab  {...(uiSchema.layoutProps || {}) } defaultActiveKey="0">
            <TabPane {...children.tabPanelProps || {}} key={"0"} tab={"0"} key={"0"} >
                <Visit schema={schema} uiSchema={children} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            </TabPane>
        </Tab>
    }

    return <Tab  {...(uiSchema.layoutProps || {}) } defaultActiveKey="0">
        {
            children.map((item, index) => {
                return <TabPane {...item.tabPanelProps || {}} key={index} tab={index} key={index}>
                    <Visit key={index} schema={schema} uiSchema={item} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
                </TabPane>
            })
        }
    </Tab>
}

const VisitFieldSet = (props) => {
    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;
    const { children } = uiSchema;

    if (!children) {
        return <div  {...(uiSchema.layoutProps || {}) }>
        </div>
    }

    if (!Array.isArray(children)) {
        return <div  {...(uiSchema.layoutProps || {}) }>
            <Visit schema={schema} uiSchema={children} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
        </div>
    }

    return <div  {...(uiSchema.layoutProps || {}) }>
        {
            children.map((item, index) => {
                return <Visit key={index} schema={schema} uiSchema={item} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            })
        }
    </div>
}

/**
 * visit ui schema
 * @param {*} props 
 */
const Visit = (props) => {

    const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;


    let result = null;
    switch (uiSchema.xType) {

        case "grid":
            result = <VisitGrid schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "row":
            result = <VisitRow schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "col":
            result = <VisitCol schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "tab":
            result = <VisitTab schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
            break;
        case "fieldset":
            result = <VisitFieldSet schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
			break;
        case "field":
            result = <VisitField
                schema={schema}
                uiSchema={uiSchema}
                edit={edit}
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

        const { schema, uiSchema, edit, onChange, onBlur } = this.props;
        const { formData } = this.state;

        return <div>
            <Visit schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                edit={edit}
                onChange={(e, newValue, fieldPath) => {
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onChange");

                    const newData = update(formData, {
                        [fieldPath]: { $set: newValue }
                    });

                    this.setState({
                        formData: newData
                    }, () => {
                        if (onChange) {
                            setimmediate(() => {
                                onChange(e, newValue, newData, fieldPath);
                            });
                        }
                        //console.log(JSON.stringify(this.state.formData));
                    });

                }}

                onBlur={(e, newValue, fieldPath) => {
                    if (onBlur) {
                        setimmediate(() => {
                            onBlur(e, newValue, formData, fieldPath);
                        });
                    }
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onBlur");
                }} />

        </div>
    }
}