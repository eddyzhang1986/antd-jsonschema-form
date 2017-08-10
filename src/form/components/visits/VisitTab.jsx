import React, { Component } from "react";
import Visit from './Visit';

import {Tabs } from 'antd';
const TabPane = Tabs.TabPane;


/**
 * 
 * @param {*} props 
 */
const VisitTab = (props) => {
    const { uiSchema, ...otherProps } = props;
    const { children, xType, tabProps = {}, panelProps = {} } = uiSchema;


    /**
     * 没有子元素的Tab直接不存在这tabs
     */
    if (!children) {
        return null;
    }

    if (!Array.isArray(children)) {
        return <Tabs {...tabProps}>
            <TabPane {...panelProps} >
                <Visit {...otherProps} uiSchema={children} />
            </TabPane>
        </Tabs>
    }

    return <Tabs {...tabProps}>
        {
            children.map((item, index) => {
                return <TabPane {...panelProps} >
                    <Visit key={index} {...otherProps} uiSchema={item} />
                </TabPane>
            })
        }
    </Tabs>
}


export default VisitTab;