
import React, { Component } from "react";
import { Input } from 'antd';
import TextWidget from './TextWidget'



const widgetMap = {
    "text": TextWidget
}

const Widget = (props) => {

    let WidgetImpl = widgetMap["text"];
    return <WidgetImpl {...props} />
}

export default Widget;