import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import ColorWidgetEdit from './color/ColorWidgetEdit'
import ColorWidgetDisplay from './color/ColorWidgetDisplay'






const ColorWidget = (props) => {
    const { edit = true } = props;
    return edit ? <ColorWidgetEdit {...props} /> : <ColorWidgetDisplay {...props} />
}



// if (process.env.NODE_ENV !== "production") {
//   ColorWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default ColorWidget;