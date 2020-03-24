import React from 'react';
import { shallow } from 'enzyme';
import Properties from './properties';

describe('Properties Component', () => {
    it('Should render x number of components against x items in props', () => {
        let properties = [{
            "price": "$100",
            "agency": { "brandingColors": { "primary": "#ffe512" }, "logo": "" },
            "id": "1",
            "mainImage": ""
        }, {
            "price": "$200",
            "agency": { "brandingColors": { "primary": "#ffe512" }, "logo": "" },
            "id": "1",
            "mainImage": ""
        }, {
            "price": "$300",
            "agency": { "brandingColors": { "primary": "#ffe512" }, "logo": "" },
            "id": "1",
            "mainImage": ""
        }];

        const component = shallow(<Properties heading="Properties" list={properties} />);
        const wrapper = component.find("[data-test='property']");
        expect(wrapper.length).toBe(3)
    });
});