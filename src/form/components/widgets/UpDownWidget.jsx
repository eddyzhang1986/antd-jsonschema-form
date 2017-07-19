import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import UpDownWidgetEdit from './updown/UpDownWidgetEdit'
import UpDownWidgetDisplay from './updown/UpDownWidgetDisplay'






const UpDownWidget = (props) => {
    const { edit = true } = props;
    return edit ? <UpDownWidgetEdit {...props} /> : <UpDownWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   UpDownWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default UpDownWidget;