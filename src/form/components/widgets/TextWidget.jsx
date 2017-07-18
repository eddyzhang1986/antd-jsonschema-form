import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";




const getOffspringSchema = (schema, fieldPath) => {
  //console.log(schema, "schema");
  return "test"
}

const getFormValue = (formData, fieldPath) => {
  //console.log(formData, "formData");
  return formData[fieldPath]
}


const TextWidget = (props) => {
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



// if (process.env.NODE_ENV !== "production") {
//   TextWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default TextWidget;