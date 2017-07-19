import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { getOffspringSchema, getFormValue } from '../../utils';






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