import React, { Component } from "react";
import Widget from '../widgets/Widget'
import { Row, Col } from 'antd';
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

export default Field