import React from 'react';
import { shallow } from 'enzyme';
import Properties from './properties';
import { properties1 } from '../../../data/testData';

describe('Properties Component', () => {
    it('Should render x number of components against x items in list', () => {
        const component = shallow(<Properties heading="Properties" list={properties1} />);
        const wrapper = component.find("[data-test='property']");
        expect(wrapper.length).toBe(properties1.length)
    });
});