import React, { Component } from "react";

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import Test1 from './pages/Test1';
import Test2 from './pages/Test2'
import Test3 from './pages/Test3'


const findCompoment = (page) => {
    let result = null;
    switch (page) {
        case "Test1":
            result = <Test1 />
            break;
        case "Test2":
            result = <Test2 />
            break;
        case "Test3":
            result = <Test3 />
            break;
    }
    return result;
}


export default class MainView extends Component {


    constructor(props) {
        super(props);
    }




    render() {

        const { pages, activeCode, onActiveChange } = this.props;
        const active = (activeCode ? { activeKey: activeCode } : {});
        return <Tabs {...active}
            onChange={(page) => {
                onActiveChange(page)
            }}>
            {
                pages.map((item, index) => {
                    return <TabPane key={item} code={item} tab={item}>
                        {findCompoment(item)}
                    </TabPane>
                })
            }
        </Tabs>
    }
}