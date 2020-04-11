import React from 'react';
import { mount } from 'enzyme';
import Main from './main';
import Root from '../redux/root';
import { properties1, properties2 } from '../data/testData';

const setup = (initialState={}) => {
  const wrapper = mount(
    <Root initialState={initialState}>
      <Main />
    </Root>
  );
  return wrapper;
}

describe('Results Component', () => {
  let wrapper;
  let results;
  let savedProperties;
  
  beforeEach(() => {
    const initialState = {
      results: properties1,
      savedProperties: properties2
    };
    wrapper = setup(initialState);
    results = wrapper.find("[data-test='results']").find("[data-test='property']");
    savedProperties = wrapper.find("[data-test='savedProperties']").find("[data-test='property']");
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render initially with 3 Results and 1 Saved Properties', () => {
    expect(results.length).toBe(properties1.length);
    expect(savedProperties.length).toBe(properties2.length);
  });

  it('should add property to Saved Properties upon clicking Add Property button in Results', () => {
    const btn = results.find("button").first();
    btn.simulate('click');
    const savedPropertiesNew = wrapper.find("[data-test='savedProperties']").find("[data-test='property']");
    expect(savedPropertiesNew.length).toBe(properties2.length + 1);
  });
  
  it('should remove property from Saved Properties upon clicking the Remove Property button', () => {
    const btn = savedProperties.find("button").first();
    btn.simulate('click');
    const savedPropertiesNew = wrapper.find("[data-test='savedProperties']").find("[data-test='property']");
    expect(savedPropertiesNew.length).toBe(properties2.length - 1);
  });
});