import React, { Component } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";
import update from 'react-addons-update';
import { getOffspringSchema, getFormValue } from '../../../utils';
import moment from 'moment';



/**
 * DateRangeWidgetEdit时间日期区域选择控件
 */
class DateRangeWidgetEdit extends Component {

    /**
         * constructor - 构造函数,初始化开始结束时间和endOpen的state
         *
         * @param  {type} props description
         * @return {type}       description
         */
    constructor(props) {
        super(props)
        this.state = {
            endOpen: false
        }
    }

    /**
     * 禁用开始日期
     */
    disabledBeginDate(beginDate) {
        const endDate = this.state.endDate;
        if (!moment(beginDate) || !moment(endDate)) {
            return false;
        }
        return moment(beginDate).valueOf() > moment(endDate).valueOf();
    }


    /**
     * 禁用结束日期
     */
    disabledEndDate(endDate) {
        const beginDate = this.state.beginDate;
        if (!moment(endDate) || !moment(beginDate)) {
            return false;
        }
        return moment(endDate).valueOf() <= moment(beginDate).valueOf();
    }


    /**
     * 日期改变时,未使用
     */
    onChange(field, value, dateStr) {

        const { schema, uiSchema, formData, onChange } = this.props;

        if (onChange) {
            const { fieldPath } = uiSchema;

            const offSpringSchema = getOffspringSchema(schema, fieldPath);
            const formValue = getFormValue(formData, fieldPath);

            const value = (formValue || offSpringSchema.default);
            const data = (value || {});

            const newData = update(data, {
                [field]: { $set: (dateStr || undefined) }
            });

            onChange(newData, newData, fieldPath);

        }

    }


    /**
     * 开始日期改变未使用
     */
    onBeginChange(value, dateStr) {
        this.onChange('beginDate', value, dateStr);
    }


    /**
     * 结束日期改变未使用
     */
    onEndChange(value, dateStr) {
        this.onChange('endDate', value, dateStr);
    }


    /**
     * 处理选择开始日期时窗口的变化
     */
    handleBeginOpenChange(open) {
        if (!open) {
            this.setState({ endOpen: true });
        }
        if (this.props.onBeginOpenChange) {
            this.props.onBeginOpenChange(open)
        }
    }

    /**
     * 处理选择结束日期时窗体的变化
     */
    handleEndOpenChange(open) {
        this.setState({ endOpen: open });
        if (this.props.onEndOpenChange) {
            this.props.onEndOpenChange(open)
        }
    }




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

        const beginDateProps = { value: (beginDate ? moment(beginDate) : undefined) };
        const endDateProps = { value: (endDate ? moment(endDate) : undefined) };


        const { endOpen } = this.state;

        return (
            <div>
                <DatePicker

                    disabledDate={this.disabledBeginDate.bind(this)}
                    onChange={this.onBeginChange.bind(this)}
                    onOpenChange={this.handleBeginOpenChange.bind(this)}
                    {...beginDateProps}
                />
                --
              <DatePicker

                    disabledDate={this.disabledEndDate.bind(this)}
                    onChange={this.onEndChange.bind(this)}
                    onOpenChange={this.handleEndOpenChange.bind(this)}
                    open={endOpen}
                    {...endDateProps}
                />

            </div>
        );
    }
}

export default DateRangeWidgetEdit