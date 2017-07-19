import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import TextareaWidgetEdit from './textarea/TextareaWidgetEdit'
import TextareaWidgetDisplay from './textarea/TextareaWidgetDisplay'






const TextareaWidget = (props) => {
    const { edit = true } = props;
    return edit ? <TextareaWidgetEdit {...props} /> : <TextareaWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   TextareaWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default TextareaWidget;