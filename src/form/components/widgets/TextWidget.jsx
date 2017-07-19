import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import TextWidgetEdit from './text/TextWidgetEdit'
import TextWidgetDisplay from './text/TextWidgetDisplay'






const TextWidget = (props) => {
    const { edit = true } = props;
    return edit ? <TextWidgetEdit {...props} /> : <TextWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   TextWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default TextWidget;