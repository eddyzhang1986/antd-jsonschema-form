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

        const { uiSchema } = this.props;
        const { tabProps = {} } = uiSchema;

        this.state = {
            activeKey: (tabProps.activeKey || 0)
        }
    }

    //fix State
    componentWillReceiveProps(nextProps) {

        const { uiSchema } = this.props;
        const { tabProps = {} } = uiSchema;

        const { uiSchema: nextUiSchema } = nextProps;
        const { tabProps: nextTabProps = {} } = nextUiSchema;

        //deepCompare activeKey
        if (tabProps.activeKey !== nextTabProps.activeKey) {
            this.setState({
                activeKey: nextTabProps.activeKey
            })
        }


    }


    render() {

        const { uiSchema, ...otherProps } = this.props;
        const { children, xType, tabProps = {}, panelProps = {} } = uiSchema;

        const { activeKey } = this.state;

        /**
         * 没有子元素的Tab直接不存在这tabs
         */
        if (!children) {
            return null;
        }

        if (!Array.isArray(children)) {
            return <Tabs activeKey={activeKey} {...tabProps}
                onChange={(active) => {
                    this.setState({
                        activeKey: active
                    });
                }}>
                <TabPane key={activeKey} {...panelProps} tab={children.title}>
                    <Visit {...otherProps} uiSchema={children} />
                </TabPane>
            </Tabs>
        }

        return <Tabs activeKey={activeKey} {...tabProps}
            onChange={(active) => {
                this.setState({
                    activeKey: active
                });
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