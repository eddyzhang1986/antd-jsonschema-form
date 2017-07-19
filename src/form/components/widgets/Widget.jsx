
import React, { Component } from "react";
import { Input } from 'antd';
import TextWidget from './TextWidget'
import TextareaWidget from './TextareaWidget'
import UpDownWidget from './UpDownWidget'
import DateWidget from './DateWidget'
import ColorWidget from './ColorWidget'


const widgetMap = {
    "text": TextWidget,
    "textarea": TextareaWidget,
    "updown": UpDownWidget,
    "date": DateWidget,
    "color": ColorWidget
}

const Widget = (props) => {

    let WidgetImpl = widgetMap["color"];
    return <WidgetImpl {...props} />
}

export default Widget;