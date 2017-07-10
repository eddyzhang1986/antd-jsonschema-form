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
    <script src="https://unpkg.com/antd-jsonschema-form@latest/dist/form.js"></script>

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

### License

The MIT License (MIT) Copyright (c) 2012-2017 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	
