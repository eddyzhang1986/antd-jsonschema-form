import React, { Component } from "react";
import Visit from './Visit';

/**
 * 
 * @param {*} props 
 */
const VisitGrid = (props) => {
    const { uiSchema, ...otherProps } = props;
    const { children, xType, ...otherConfig } = uiSchema;

    if (!children) {
        return <div  {...otherConfig} >
        </div>
    }

    if (!Array.isArray(children)) {
        return <div  {...otherConfig}>
            <Visit {...otherProps} uiSchema={children} />
        </div>
    }

    return <div  {...otherConfig}>
        {
            children.map((item, index) => {
                return <Visit key={index} {...otherProps} uiSchema={item} />
            })
        }
    </div>
}

export default VisitGrid;