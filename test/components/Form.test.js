import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from '../../src/components/Form'

import { shallow } from 'enzyme'



const setup = () => {
    // mock props
    const props = {
        // Jest mock props
    }
    // enzyme test render
    const wrapper = shallow(<Form {...props} />)
    return {
        props,
        wrapper
    }
}

describe('form', () => {
    const { wrapper, props } = setup();
    // assert
    it('form Component should be render', async () => {
        //.find(selector) Enzyme
        // div must be exists
        expect(wrapper.find('div').text()).toEqual('test');
    })
})