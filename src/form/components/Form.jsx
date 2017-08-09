import React, { Component } from "react";
import Visit from './visits/Visit';
import update from 'react-addons-update';
import PropTypes from "prop-types";
import { setimmediate } from '../utils';
import _ from 'lodash';



export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.formData || {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.formData, nextProps.formData)) {
            this.setState({
                formData: nextProps.formData
            })
        }
    }
    render() {

        const { schema, uiSchema, edit, onChange, onBlur } = this.props;
        const { formData } = this.state;

        return <div>
            <Visit schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                edit={edit}
                onChange={(e, newValue, fieldPath) => {
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onChange");

                    const newData = update(formData, {
                        [fieldPath]: { $set: newValue }
                    });

                    this.setState({
                        formData: newData
                    }, () => {
                        if (onChange) {
                            setimmediate(() => {
                                onChange(e, newValue, newData, fieldPath);
                            });
                        }
                        //console.log(JSON.stringify(this.state.formData));
                    });

                }}

                onBlur={(e, newValue, fieldPath) => {
                    if (onBlur) {
                        setimmediate(() => {
                            onBlur(e, newValue, formData, fieldPath);
                        });
                    }
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onBlur");
                }} />

        </div>
    }
}

