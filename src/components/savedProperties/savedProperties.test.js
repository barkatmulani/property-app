import React from 'react';
import { mount } from 'enzyme';
import Root from '../../redux/root';
import SavedProperties from './savedProperties';
import { properties1 } from '../../data/testData';

describe('Renders Saved Properties', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Root initialState={{savedProperties: properties1}}>
                <SavedProperties />
            </Root>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });    

    it('Should render Saved Properties column', () => {
        const comp = wrapper.find("[data-test='savedProperties']");
        expect(comp.length).toBe(1);
    });

    it('Should render x number of Saved Properties against x items in list', () => {
        const comp = wrapper.find("[data-test='property']");
        expect(comp.length).toBe(properties1.length);
    });
});