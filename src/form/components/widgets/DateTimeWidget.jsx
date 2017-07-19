import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import DateTimeWidgetEdit from './datetime/DateTimeWidgetEdit'
import DateTimeWidgetDisplay from './datetime/DateTimeWidgetDisplay'






const DateTimeWidget = (props) => {
    const { edit = true } = props;
    return edit ? <DateTimeWidgetEdit {...props} /> : <DateTimeWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   DateTimeWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default DateTimeWidget;