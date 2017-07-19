import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";
import { getOffspringSchema, getFormValue } from '../../utils';
import moment from 'moment';






const DateTimeWidget = (props) => {
  const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
  const { fieldPath } = uiSchema;
  const offSpringSchema = getOffspringSchema(schema, fieldPath);
  const formValue = getFormValue(formData, fieldPath);

  const value = (formValue || offSpringSchema.default);


  const valueProps = { value: (value ? moment(value) : undefined) };
  //console.log(valueProps, "valueProps");

  return <DatePicker
    showTime
    format="YYYY-MM-DD HH:mm:ss"
    placeholder="Select Time"

    {...valueProps}
    onChange={(e) => {
      onChange(e, e ? e.format("YYYY-MM-DD HH:mm:ss") : undefined, fieldPath);
    }}
    onBlur={(e) => {
      onBlur(e, e ? e.format("YYYY-MM-DD HH:mm:ss") : undefined, fieldPath);
    }}
    onOk={(value) => {
      onChange(value, value ? value.format("YYYY-MM-DD HH:mm:ss") : undefined, fieldPath);
    }}
  />
}



// if (process.env.NODE_ENV !== "production") {
//   DateTimeWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default DateTimeWidget;