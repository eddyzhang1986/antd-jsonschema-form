import React, { Component } from "react";
import { Col } from 'antd';
import Visit from './Visit';

/**
 * 
 * @param {*} props 
 */
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

export default VisitCol;