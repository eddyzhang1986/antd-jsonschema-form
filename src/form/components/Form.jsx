import React, { Component } from "react";
import Visit from './visits/Visit';
import _ from 'lodash';



export default class Form extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { schema, uiSchema, formData, edit, onChange, onBlur } = this.props;

        return <div>
            <Visit schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                edit={edit}
                onChange={(e, newValue, fieldPath) => {
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onChange");

                    if (onChange) {
                        onChange(e, newValue, fieldPath);
                    }
                    // const newData = update(formData, {
                    //     [fieldPath]: { $set: newValue }
                    // });

                    // this.setState({
                    //     formData: newData
                    // }, () => {
                    //     if (onChange) {
                    //         setimmediate(() => {
                    //             onChange(e, newValue, newData, fieldPath);
                    //         });
                    //     }
                    //     //console.log(JSON.stringify(this.state.formData));
                    // });

                }}

                onBlur={(e, newValue, fieldPath) => {
                    if (onBlur) {
                        onBlur(e, newValue, fieldPath);
                    }
                    //console.log(fieldPath);
                    //console.log(e.target.value, "onBlur");
                }} />

        </div>
    }
}

