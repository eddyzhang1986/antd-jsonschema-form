import React from "react";
import PropTypes from "prop-types";

import { InputNumber } from 'antd';


function UpDownWidget(props) {
  return <InputNumber {...props} {...rangeSpec(props.schema)} />;
}

// if (process.env.NODE_ENV !== "production") {
//   UpDownWidget.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   };
// }

export default UpDownWidget;