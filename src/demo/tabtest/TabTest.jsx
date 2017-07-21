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
                onDelete={(targetKey) => {
                    let newPages = [];
                    for (let item of pages) {
                        if (targetKey !== item) {
                            newPages.push(item)
                        }
                    }
                    let newActiveCode = undefined;
                    if (newPages.length > 0) {
                        newActiveCode = (newPages[newPages.length - 1] || undefined)
                    }
                    this.setState({
                        pages: newPages,
                        activeCode: newActiveCode
                    })

                }}
                onActiveChange={(page) => {
                    this.setState({
                        activeCode: page
                    })
                }} />
        </div>
    }
}