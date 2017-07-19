import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { getOffspringSchema, getFormValue } from '../../../utils';






const TextareaWidgetDisplay = (props) => {
  const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
  const { fieldPath } = uiSchema;
  const offSpringSchema = getOffspringSchema(schema, fieldPath);
  const formValue = getFormValue(formData, fieldPath);

  const value = (formValue || offSpringSchema.default);


  const valueProps = { value: (value || undefined) };
  //console.log(valueProps, "valueProps");

  return <Input
    type="textarea"
    {...valueProps}
    onChange={(e) => {
      onChange(e, e.target.value, fieldPath);
    }}
    onBlur={(e) => {
      onBlur(e, e.target.value, fieldPath);
    }}
  />
}



// if (process.env.NODE_ENV !== "production") {
//   TextareaWidgetDisplay.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default TextareaWidgetDisplay;