import React from 'react';
import { shallow } from 'enzyme';
import Main from '../main';
import { properties } from '../../data/testData';
import { testStore } from '../../Utils';

describe('Results Component', () => {

  it('Should render with 2 divs, i.e. Results & Saved Properties', () => {
    const initialState = {
          results: [properties],
          savedProperties: []
    };
    
    const store = testStore(initialState);
    const wrapper = shallow(<Main store={store} />).dive();
        
    const results = wrapper.find("[data-test='results']");
    const savedProperties = wrapper.find("[data-test='savedProperties']");
    expect(results.length).toBe(1);
    expect(savedProperties.length).toBe(1);
  });
});