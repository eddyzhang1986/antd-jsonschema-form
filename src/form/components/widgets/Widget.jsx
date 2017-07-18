
import React, { Component } from "react";
import { Input } from 'antd';




const getOffspringSchema = (schema, fieldPath) => {
    //console.log(schema, "schema");
    return "test"
}

const getFormValue = (formData, fieldPath) => {
    //console.log(formData, "formData");
    return formData[fieldPath]
}


// const widgetMap = {
//     "text": TextWidget,
//     "textarea": TextareaWidget,
//     "datepicker": DatePickerWidget,
//     "datetimepicker": DateTimePickerWidget,
//     "switch": SwitchWidget,
//     "checkbox": CheckboxWidget,
//     "updown": UpdownWidget,
//     "radio": RadioWidget
// }

const Widget = (props) => {
    const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
    const { fieldPath } = uiSchema;
    const offSpringSchema = getOffspringSchema(schema, fieldPath);
    const formValue = getFormValue(formData, fieldPath);

    const value = (formValue || offSpringSchema.default);


    const valueProps = { value: (value || undefined) };
    //console.log(valueProps, "valueProps");

    return <Input
        {...valueProps}
        onChange={(e) => {
            onChange(e, fieldPath);
        }}
        onBlur={(e) => {
            onBlur(e, fieldPath);
        }}
    />
}
export default Widget;