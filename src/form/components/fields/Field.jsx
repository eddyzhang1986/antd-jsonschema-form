import React, { Component } from "react";
import Widget from '../widgets/Widget'
import { Row, Col } from 'antd';
import { getOffspringSchema, getFormValue } from '../../utils';

/**
 * 
 * @param {*} props 
 */
const Field = (props) => {
    const { schema, uiSchema } = props;

    //获取后继节点的schema
    const offspringSchema = getOffspringSchema(schema, uiSchema.fieldPath);

    return <Col style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Col span={8} style={{ paddingLeft: "15px" }}>{uiSchema.fieldPath}</Col>
        <Col span={16}><Widget {...props} /></Col>
    </Col>
}

export default Field