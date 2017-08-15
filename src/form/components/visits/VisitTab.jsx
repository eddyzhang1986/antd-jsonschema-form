import React, { Component } from "react";
import { deepCompare } from '../../utils';
import Visit from './Visit';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


/**
 * 
 * @param {*} props 
 */
class VisitTab extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        const { uiSchema, onUISchemaChange, ...otherProps } = this.props;
        const { children, xType, tabProps = {}, panelProps = {} } = uiSchema;
        const { activeKey = 0 } = tabProps;


        /**
         * 没有子元素的Tab直接不存在这tabs
         */
        if (!children) {
            return null;
        }

        if (!Array.isArray(children)) {
            return <Tabs activeKey={activeKey} {...tabProps}
                onChange={(active) => {
                    if (onUISchemaChange) {
                        onUISchemaChange();
                    }
                }}>
                <TabPane key={activeKey} {...panelProps} tab={children.title}>
                    <Visit {...otherProps} uiSchema={children} />
                </TabPane>
            </Tabs>
        }

        return <Tabs activeKey={activeKey} {...tabProps}
            onChange={(active) => {
                if (onUISchemaChange) {
                    onUISchemaChange();
                }
            }}>
            {
                children.map((item, index) => {
                    return <TabPane key={index}  {...panelProps} tab={item.title}>
                        <Visit {...otherProps} uiSchema={item} />
                    </TabPane>
                })
            }
        </Tabs>
    }

}



export default VisitTab;