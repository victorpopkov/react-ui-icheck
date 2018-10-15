import { mount, render, shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Input from '../Input'; // eslint-disable-line sort-imports

describe('<Input />', () => {
  let testInput = null;

  beforeEach(() => {
    testInput = <Input inputType="checkbox" />;
  });

  it('should have the default props when mounted', () => {
    const wrapper = mount(testInput);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render', () => {
    it('the default React components', () => {
      const wrapper = shallow(testInput);
      expect(wrapper).toMatchSnapshot();
    });

    it('the default static HTML', () => {
      const wrapper = render(testInput);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
