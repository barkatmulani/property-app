import React from 'react';
import { shallow } from 'enzyme';
import Properties from './properties';
import { properties } from '../../../data/testData';

describe('Properties Component', () => {
    it('Should render x number of components against x items in list', () => {
        const component = shallow(<Properties heading="Properties" list={properties} />);
        const wrapper = component.find("[data-test='property']");
        expect(wrapper.length).toBe(properties.length)
    });
});