
import React, { Component } from "react";
import { Input } from 'antd';
import TextWidget from './TextWidget'
import TextareaWidget from './TextareaWidget'
import UpDownWidget from './UpDownWidget'
import DateWidget from './DateWidget'



const widgetMap = {
    "text": TextWidget,
    "textarea": TextareaWidget,
    "updown": UpDownWidget,
    "date": DateWidget
}

const Widget = (props) => {

    let WidgetImpl = widgetMap["date"];
    return <WidgetImpl {...props} />
}

export default Widget;