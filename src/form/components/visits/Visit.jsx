import React, { Component } from "react";

import VisitGrid from './VisitGrid';
import VisitRow from './VisitRow';
import VisitCol from './VisitCol';
import VisitTab from './VisitTab';
import VisitFieldSet from './VisitFieldSet';
import VisitField from './VisitField';


let visits = [{
    "xType": "grid",
    "visit": VisitGrid
}, {
    "xType": "row",
    "visit": VisitRow
}, {
    "xType": "col",
    "visit": VisitCol
}, {
    "xType": "tab",
    "visit": VisitTab
}, {
    "xType": "fieldset",
    "visit": VisitFieldSet
}, {
    "xType": "field",
    "visit": VisitField
}];


const getComponentVisit = (xType) => {
    let ComponentVisit = visits.find(v => v.xType === xType);
    return ComponentVisit;
}


const Visit = (props) => {

    const { uiSchema, ...otherProps } = props;
    //console.log('ComponentVisit', 'ComponentVisit');
    let ComponentVisit = getComponentVisit(uiSchema.xType).visit;
    return <ComponentVisit uiSchema={uiSchema} {...otherProps} />

}


export default Visit;