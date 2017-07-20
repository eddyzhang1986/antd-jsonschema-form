import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import DateRangeWidgetEdit from './dateRange/DateRangeWidgetEdit'
import DateRangeWidgetDisplay from './dateRange/DateRangeWidgetDisplay'






const DateRangeWidget = (props) => {
    const { edit = true } = props;
    return edit ? <DateRangeWidgetEdit {...props} /> : <DateRangeWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   DateRangeWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default DateRangeWidget;