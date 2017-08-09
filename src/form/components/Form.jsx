import React, { Component } from "react";
import update from 'react-addons-update';
import PropTypes from "prop-types";
import { setimmediate } from '../utils';
import _ from 'lodash';

import Widget from './widgets/Widget';
import { Row, Col, Tabs } from 'antd';
const TabPane = Tabs.TabPane;



const VisitGrid = (props) => {
    const { uiSchema, ...otherProps } = props;
    const { children, xType, ...otherConfig } = uiSchema;

    if (!children) {
        return <div  {...otherConfig} >
        </div>
    }

    if (!Array.isArray(children)) {
        return <div  {...otherConfig}>
            <Visit {...otherProps} uiSchema={children} />
        </div>
    }

    return <div  {...otherConfig}>
        {
            children.map((item, index) => {
                return <Visit key={index} {...otherProps} uiSchema={item} />
            })
        }
    </div>
}




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
    const { uiSchema, ...otherProps } = props;
    return <Field {...otherProps} uiSchema={uiSchema} />
}



const VisitRow = (props) => {

    const { uiSchema, ...otherProps } = props;
    const { children, xType, ...otherConfig } = uiSchema;


    if (!children) {
        return <Row {...otherConfig}>
        </Row>
    }

    if (!Array.isArray(children)) {
        return <Row {...otherConfig}>
            <Visit  {...otherProps} uiSchema={children} />
        </Row>
    }

    return <Row  {...otherConfig}>
        {
            children.map((item, index) => {
                return <Visit key={index} {...otherProps} uiSchema={item} />
            })
        }
    </Row>
}



const VisitCol = (props) => {
    const { uiSchema, ...otherProps } = props;
    const { children, xType, ...otherConfig } = uiSchema;


    if (!children) {
        return <Col {...otherConfig}>
        </Col>
    }

    if (!Array.isArray(children)) {
        return <Col {...otherConfig}>
            <Visit  {...otherProps} uiSchema={children} />
        </Col>
    }

    return <Col  {...otherConfig}>
        {
            children.map((item, index) => {
                return <Visit key={index} {...otherProps} uiSchema={item} />
            })
        }
    </Col>
}



const VisitTab = (props) => {
    const { uiSchema, ...otherProps } = props;
    const { children, xType, tabProps = {}, panelProps = {} } = uiSchema;


    /**
     * 没有子元素的Tab直接不存在这tabs
     */
    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Tab {...tabProps}>
            <TabPane {...panelProps} >
                <Visit {...otherProps} uiSchema={children} />
            </TabPane>
        </Tab>
    }

    return <Tab {...tabProps}>
        {
            children.map((item, index) => {
                return <TabPane {...panelProps} >
                    <Visit key={index} {...otherProps} uiSchema={item} />
                </TabPane>
            })
        }
    </Tab>
}


const VisitFieldSet = (props) => {
    const { uiSchema, ...otherProps } = props;
    const { children, xType, ...otherConfig } = uiSchema;

    if (!children) {
        return <div  {...otherConfig} >
        </div>
    }

    if (!Array.isArray(children)) {
        return <div  {...otherConfig}>
            <Visit {...otherProps} uiSchema={children} />
        </div>
    }

    return <div  {...otherConfig}>
        {
            children.map((item, index) => {
                return <Visit key={index} {...otherProps} uiSchema={item} />
            })
        }
    </div>
}



let visits = [{
    "xType": "grid",
    "visit": VisitGrid
}, {
    "xType": "row",
    "visit": VisitRow
}, {
    "xType": "col",
    "visit": VisitCol
}, {
    "xType": "tab",
    "visit": VisitTab
}, {
    "xType": "fieldset",
    "visit": VisitFieldSet
}, {
    "xType": "field",
    "visit": VisitField
}];

const getComponentVisit = (xType) => {
    let ComponentVisit = visits.find(v => v.xType === xType);
    return ComponentVisit;
}


const Visit = (props) => {

    const { uiSchema, ...otherProps } = props;
    console.log('ComponentVisit', 'ComponentVisit');
    let ComponentVisit = getComponentVisit(uiSchema.xType).visit;
    return <ComponentVisit uiSchema={uiSchema} {...otherProps} />

}

// /**
//  * visit ui schema
//  * @param {*} props 
//  */
// const Visit = (props) => {

//     const { schema, uiSchema, edit, formData, onChange, onBlur, ...otherProps } = props;


//     let result = null;
//     switch (uiSchema.xType) {

//         case "grid":
//             result = <VisitGrid schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
//             break;
//         case "row":
//             result = <VisitRow schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
//             break;
//         case "col":
//             result = <VisitCol schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
//             break;
//         case "tab":
//             result = <VisitTab schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
//             break;
//         case "fieldset":
//             result = <VisitFieldSet schema={schema} uiSchema={uiSchema} edit={edit} formData={formData} onChange={onChange} onBlur={onBlur} />
//             break;
//         case "field":
//             result = <VisitField
//                 schema={schema}
//                 uiSchema={uiSchema}
//                 edit={edit}
//                 formData={formData}
//                 onChange={onChange}
//                 onBlur={onBlur} />
//             break;
//         default:
//             break;
//     }

//     return result;

// }

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
        console.log('test');
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

