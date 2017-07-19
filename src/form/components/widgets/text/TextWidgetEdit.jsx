import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { getOffspringSchema, getFormValue } from '../../../utils';






const TextWidgetEdit = (props) => {
  const { schema, uiSchema, edit = true, formData, onChange, onBlur, ...otherProps } = props;
  const { fieldPath } = uiSchema;
  const offSpringSchema = getOffspringSchema(schema, fieldPath);
  const formValue = getFormValue(formData, fieldPath);

  const value = (formValue || offSpringSchema.default);


  const valueProps = { value: (value || undefined) };
  //console.log(valueProps, "valueProps");

  //console.log(edit, 'edit');

  return <Input
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
//   TextWidgetEdit.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default TextWidgetEdit;