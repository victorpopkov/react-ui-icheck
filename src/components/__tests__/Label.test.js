import { mount, render, shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Label from '../Label'; // eslint-disable-line sort-imports

describe('<Label />', () => {
  let testLabel = null;

  beforeEach(() => {
    testLabel = <Label handleHover={() => false}>test</Label>;
  });

  it('should have the default props when mounted', () => {
    const wrapper = mount(testLabel);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render', () => {
    it('the default React components', () => {
      const wrapper = shallow(testLabel);
      expect(wrapper).toMatchSnapshot();
    });

    it('the default static HTML', () => {
      const wrapper = render(testLabel);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
