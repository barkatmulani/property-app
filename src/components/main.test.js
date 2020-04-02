import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';
import { properties } from '../data/testData';
import { testStore } from '../Utils';

const setup = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Main store={store} />).dive();
  return wrapper;
}

describe('Results Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      results: [properties],
      savedProperties: []
    }
    wrapper = setup(initialState);
  });

  it('Should render with 2 divs, i.e. Results & Saved Properties', () => {
    const results = wrapper.find("[data-test='results']");
    const savedProperties = wrapper.find("[data-test='savedProperties']");
    expect(results.length).toBe(1);
    expect(savedProperties.length).toBe(1);
  });
});