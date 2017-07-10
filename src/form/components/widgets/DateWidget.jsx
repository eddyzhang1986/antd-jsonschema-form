import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;


function DateWidget(props) {
  const { onChange } = props;
  return (
    <DatePicker
      {...props}
      onChange={value => onChange(value || undefined)}
    />
  );
}

// if (process.env.NODE_ENV !== "production") {
//   DateWidget.propTypes = {
//     value: PropTypes.string,
//   };
// }

export default DateWidget;