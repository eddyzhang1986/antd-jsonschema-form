import React, { Component } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";
import { getOffspringSchema, getFormValue } from '../../../utils';
import moment from 'moment';


/**
 * DateRangeWidgetDisplay时间日期区域选择控件
 */
class DateRangeWidgetDisplay extends Component {



    /**
     * render - 渲染组件
     *
     * @return {type}  description
     */
    render() {


        const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = this.props;
        const { fieldPath } = uiSchema;
        const offSpringSchema = getOffspringSchema(schema, fieldPath);
        const formValue = getFormValue(formData, fieldPath);

        const value = (formValue || offSpringSchema.default);
        const { beginDate = undefined, endDate = undefined } = (value || {});

        return (
            <div>
                {beginDate ? <span>{beginDate.format("YYYY-MM-dd")}</span> : <span></span>}
                --
                {endDate ? <span>{endDate.format("YYYY-MM-dd")}</span> : <span></span>}
            </div>
        );
    }
}

export default DateRangeWidgetDisplay;