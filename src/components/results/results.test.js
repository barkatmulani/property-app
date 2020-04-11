import React from 'react';
import { mount } from 'enzyme';
import Root from '../../redux/root';
import Results from './results';
import { properties1 } from '../../data/testData';

describe('Renders Results', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Root initialState={{results: properties1}}>
                <Results />
            </Root>
        );
    });
    
    afterEach(() => {
        wrapper.unmount();
    });
    
    it('Should render Results column', () => {
        const comp = wrapper.find("[data-test='results']");
        expect(comp.length).toBe(1);
    });

    it('Should render x number of Results against x items in list', () => {
        const comp = wrapper.find("[data-test='property']");
        expect(comp.length).toBe(properties1.length);
    });
});