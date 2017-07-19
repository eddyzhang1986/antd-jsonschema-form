import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "antd";
import { getOffspringSchema, getFormValue } from '../../utils';






const UpDownWidget = (props) => {
  const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
  const { fieldPath } = uiSchema;
  const offSpringSchema = getOffspringSchema(schema, fieldPath);
  const formValue = getFormValue(formData, fieldPath);

  const value = (formValue || offSpringSchema.default);


  const valueProps = { value: (value || "") };
  //console.log(valueProps, "valueProps");

  return <InputNumber
    {...valueProps}
    onChange={(e) => {
      onChange(e, e, fieldPath);
    }}
    onBlur={(e) => {
      onBlur(e, e, fieldPath);
    }}
  />
}



// if (process.env.NODE_ENV !== "production") {
//   UpDownWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default UpDownWidget;