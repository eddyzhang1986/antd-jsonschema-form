import React, { Component } from "react";
import { Row } from 'antd';
import Visit from './Visit';


/**
 * 
 * @param {*} props 
 */
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


export default VisitRow;