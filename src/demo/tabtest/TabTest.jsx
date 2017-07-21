import React, { Component } from "react";

import MainView from './MainView'
import Menu from './Menu'

export default class TabTest extends Component {


    constructor(props) {
        super(props);
        this.state = {

            pages: [

            ],
            activeCode: undefined
        }
    }

    render() {
        const { pages, activeCode } = this.state;
        return <div>
            <Menu onClick={(page) => {
                console.log(pages, 'pages');
                let selectPage = pages.find(m => m == page);
                console.log(page, 'selectPage');
                if (selectPage) {
                    this.setState({
                        activeCode: page
                    })
                } else {
                    this.setState({
                        pages: [...pages, page],
                        activeCode: page
                    })
                }

            }} />
            <MainView pages={pages} activeCode={activeCode}
                onActiveChange={(page) => {
                    this.setState({
                        activeCode: page
                    })
                }} />
        </div>
    }
}