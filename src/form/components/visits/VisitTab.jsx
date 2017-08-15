import React, { Component } from "react";
//import { deepCompare } from '../../utils';
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

        const { uiSchema } = this.props;
        const { activeKey = 0, ...otherConfig } = uiSchema;

        this.state = {
            activeKey: activeKey
        }
    }

    //fix State
    componentWillReceiveProps(nextProps) {

        const { uiSchema } = this.props;
        const { activeKey } = uiSchema;

        const { uiSchema: nextUiSchema } = nextProps;
        const { activeKey: nextActiveKey } = nextUiSchema;

        //compare activeKey
        if (activeKey !== nextActiveKey) {
            this.setState({
                activeKey: (nextActiveKey || 0)
            })
        }


    }


    render() {

        const { uiSchema, ...otherProps } = this.props;
        const { children, xType, ...otherConfig } = uiSchema;

        const { activeKey } = this.state;

        /**
         * 没有子元素的Tab直接不存在这tabs
         */
        if (!children) {
            return null;
        }

        if (!Array.isArray(children)) {
            return <Tabs activeKey={activeKey} {...otherConfig}
                onChange={(active) => {
                    this.setState({
                        activeKey: active
                    });
                }}>
                <TabPane key={activeKey} {...(children.panelProps || {}) }>
                    <Visit {...otherProps} uiSchema={children} />
                </TabPane>
            </Tabs>
        }

        return <Tabs activeKey={activeKey} {...otherConfig}
            onChange={(active) => {
                this.setState({
                    activeKey: active
                });
            }}>
            {
                children.map((item, index) => {
                    return <TabPane key={index} {...(item.panelProps || {}) }>
                        <Visit {...otherProps} uiSchema={item} />
                    </TabPane>
                })
            }
        </Tabs>
    }

}



export default VisitTab;