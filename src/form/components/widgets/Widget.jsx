
import React, { Component } from "react";
import { Input } from 'antd';
import TextWidget from './TextWidget'
import TextareaWidget from './TextareaWidget'
import UpDownWidget from './UpDownWidget'
import DateWidget from './DateWidget'
import DateTimeWidget from './DateTimeWidget'
import ColorWidget from './ColorWidget'


const widgetMap = {
    "text": TextWidget,
    "textarea": TextareaWidget,
    "updown": UpDownWidget,
    "date": DateWidget,
    "date-time": DateTimeWidget,
    "color": ColorWidget
}

const Widget = (props) => {
    const { schema, uiSchema } = props;
    let WidgetImpl = widgetMap[(uiSchema.widget || "text")];
    return <WidgetImpl {...props} />
}

export default Widget;