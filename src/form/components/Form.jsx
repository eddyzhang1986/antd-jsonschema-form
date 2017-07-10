import React, { Component } from "react";
import PropTypes from "prop-types";



export default class Form extends Component {

    render() {

        //const { schema, uiSchema, formData, errorSchema, idSchema } = this.state;
        //const registry = this.getRegistry();
        //const _SchemaField = registry.fields.SchemaField;

        return <div>
           test
        </div>
    }

    getRegistry() {
        // For BC, accept passed SchemaField and TitleField props and pass them to
        // the "fields" registry one.
        const { fields, widgets } = getDefaultRegistry();
        return {
            fields: { ...fields, ...this.props.fields },
            widgets: { ...widgets, ...this.props.widgets },
            ArrayFieldTemplate: this.props.ArrayFieldTemplate,
            FieldTemplate: this.props.FieldTemplate,
            definitions: this.props.schema.definitions || {},
            formContext: this.props.formContext || {},
        };
    }
    
}