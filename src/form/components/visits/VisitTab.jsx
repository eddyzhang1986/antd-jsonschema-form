import React, { Component } from "react";
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

        this.state = {
            activeKey: 0
        }
    }

    //fix State
    componentWillReceiveProps(nextProps){


    }
    

    render() {
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
                <TabPane key={0} {...panelProps} >
                    <Visit {...otherProps} uiSchema={children} />
                </TabPane>
            </Tabs>
        }

        return <Tabs {...tabProps}
            onChange={(activeKey) => {
                this.setState({
                    activeKey: activeKey
                });
            }}>
            {
                children.map((item, index) => {
                    return <TabPane {...panelProps} >
                        <Visit key={index} {...otherProps} uiSchema={item} />
                    </TabPane>
                })
            }
        </Tabs>
    }

}



export default VisitTab;