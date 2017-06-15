[![Build Status](https://travis-ci.org/eddyzhang1986/antd-jsonschema-form.svg?branch=master)](https://travis-ci.org/eddyzhang1986/antd-jsonschema-form)
[![codecov](https://codecov.io/gh/eddyzhang1986/antd-jsonschema-form/branch/master/graph/badge.svg)](https://codecov.io/gh/eddyzhang1986/antd-jsonschema-form)
					
## Welcome to antd-jsonschema-form

  This project base on :

  1. [antd-design](https://github.com/ant-design/ant-design "antd-design") (a beautiful react ui framework)

  2. [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form "react-jsonschema-form")(a powerful Form widget for 'IETF JSONSchema Specification')

  3. [IETF JSON Schema](https://github.com/mozilla-services/react-jsonschema-form "IETF JSON Schema")
   
##### This project use antd design ui framework implements react-jsonschema-form base on IETF JSONSchema v4 Specification.


### Quick start

#### Setup

    npm install --save antd-jsonschema-form

#### Import & Use

###### npm

    import React, {Component} from 'react';
    import { render } from "react-dom";
    import Form from 'antd-jsonschema-form';

    
    render((
       <Form {...} />
     ), document.getElementById("app"));

###### CDN

    <!--import babel and react-->
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    <!--import antd-jsonschema-form-->
    <script src="https://unpkg.com/antd-jsonschema-form@latest/dist/bundle.js"></script>

    <!--render form-->
    const {default: Form} = AntdJSONSchemaForm;
 
    render((
       <Form {...} />
     ), document.getElementById("app"));
    
 

### Live demo

[https://eddyzhang1986.github.io/antd-jsonschema-form/](https://eddyzhang1986.github.io/antd-jsonschema-form/ "https://eddyzhang1986.github.io/antd-jsonschema-form/")
    
### Documents


### Support or Contact


### Contributors


