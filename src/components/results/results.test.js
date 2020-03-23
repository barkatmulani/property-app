import React from 'react';
import { shallow } from 'enzyme';
import Properties from './results';

describe('Properties', () => {
    it('Should have 3 properties', () => {
        const comp = shallow(<Properties />);
        console.log(comp);
        const wrapper = comp.find('.btn-success');
        expect(wrapper.length).toBe(3);
    })
})