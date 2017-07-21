
import React, { Component } from "react";


export default class Test3 extends Component {


    constructor(props) {
        super(props);
        console.log("Test3 did constructor")
    }

    componentDidMount() {
        console.log("Test3 did mount")
    }


    render() {

        return <div>test3</div>
    }



}