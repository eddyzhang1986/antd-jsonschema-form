
import React, { Component } from "react";
import { Input } from 'antd';
import TextWidget from './TextWidget'
import UpDownWidget from './UpDownWidget'



const widgetMap = {
    "text": TextWidget,
    "updown": UpDownWidget
}

const Widget = (props) => {

    let WidgetImpl = widgetMap["updown"];
    return <WidgetImpl {...props} />
}

export default Widget;