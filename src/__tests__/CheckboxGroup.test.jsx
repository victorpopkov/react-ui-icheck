import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Checkbox, CheckboxGroup } from '../index';

describe('<CheckboxGroup /> component', () => {
  const testCheckboxGroup = (
    <CheckboxGroup>
      <Checkbox />
    </CheckboxGroup>
  );

  it('should have the default props values when mounted', () => {
    const wrapper = mount(testCheckboxGroup);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render the corresponding HTML', () => {
    it('when only the default props are set', () => {
      const wrapper = mount(testCheckboxGroup);
      expect(wrapper).toMatchSnapshot();
    });

    it('when the checkboxWrapClassName and checkboxWrapTag props values are set', () => {
      const wrapper = mount(
        <CheckboxGroup checkboxWrapClassName="test" checkboxWrapTag="div">
          <Checkbox />
        </CheckboxGroup>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
