
import React, { Component } from "react";
import { Input } from 'antd';
import TextWidget from './TextWidget'
import TextareaWidget from './TextareaWidget'
import UpDownWidget from './UpDownWidget'



const widgetMap = {
    "text": TextWidget,
    "textarea": TextareaWidget,
    "updown": UpDownWidget
}

const Widget = (props) => {

    let WidgetImpl = widgetMap["textarea"];
    return <WidgetImpl {...props} />
}

export default Widget;