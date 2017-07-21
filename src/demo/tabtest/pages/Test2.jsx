
import React, { Component } from "react";


export default class Test2 extends Component {


    constructor(props) {
        super(props);
        console.log("Test2 did constructor")
    }

    componentDidMount() {
        console.log("Test2 did mount")
    }


    render() {

        return <div>test2</div>
    }



}