import React, { Component } from "react";
import { Row, Col } from 'antd';
import Field from '../fields/Field';

/**
 * 
 * @param {*} props 
 */
const VisitField = (props) => {
    const { uiSchema, ...otherProps } = props;
    return <Field {...otherProps} uiSchema={uiSchema} />
}


export default VisitField;