import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import DateWidgetEdit from './date/DateWidgetEdit'
import DateWidgetDisplay from './date/DateWidgetDisplay'






const DateWidget = (props) => {
    const { edit = true } = props;
    return edit ? <DateWidgetEdit {...props} /> : <DateWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   DateWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default DateWidget;