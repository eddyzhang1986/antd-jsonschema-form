
import React, { Component } from "react";


export default class Test1 extends Component {

    constructor(props){
        super(props);
        console.log("Test1 did constructor")
    }

    componentDidMount(){
        console.log("Test1 did mount")
    }

    render() {

        return <div>test1</div>
    }



}