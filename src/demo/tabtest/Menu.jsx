import React, { Component } from "react";


export default class Menu extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        const { pages, onClick } = this.props;

        return <ul>
            <li>
                <a onClick={() => { onClick("Test1") }}>Test1</a>
                <a onClick={() => { onClick("Test2") }}>Test2</a>
                <a onClick={() => { onClick("Test3") }}>Test3</a>
            </li>
        </ul>
    }
}