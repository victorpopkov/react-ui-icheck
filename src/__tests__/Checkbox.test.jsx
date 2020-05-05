import { mount, render } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Checkbox from '../Checkbox'; // eslint-disable-line sort-imports

describe('<Checkbox /> component', () => {
  it('should have the default props values when mounted', () => {
    const wrapper = mount(<Checkbox />);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render the corresponding HTML', () => {
    it('when only the default props are set', () => {
      const wrapper = render(<Checkbox />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when the label is set as a prop string value', () => {
      const wrapper = render(<Checkbox label="label" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when the label is set as children with labelTag prop set to <div />', () => {
      const wrapper = render(
        <Checkbox labelTag="div">
          <span>label</span>
        </Checkbox>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should update the state', () => {
    const testCheckbox = <Checkbox label="label" />;

    it('when the checked prop has changed', () => {
      const spy = jest.spyOn(Checkbox.prototype, 'componentWillReceiveProps');
      const wrapper = mount(testCheckbox);

      expect(spy).toHaveBeenCalledTimes(0);
      expect(wrapper.props().checked).toBe(false);
      expect(wrapper.state().checked).toBe(false);

      wrapper.setProps({ checked: true });

      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.props().checked).toBe(true);
      expect(wrapper.state().checked).toBe(true);
    });

    describe('when handling the <label />', () => {
      it('onFocus()', () => {
        const wrapper = mount(testCheckbox);

        expect(wrapper.state().hovered).toBe(false);
        wrapper.simulate('focus');
        expect(wrapper.state().hovered).toBe(true);
      });

      it('onBlur()', () => {
        const wrapper = mount(testCheckbox);

        wrapper.setState({ hovered: true });

        expect(wrapper.state().hovered).toBe(true);
        wrapper.simulate('blur');
        expect(wrapper.state().hovered).toBe(false);
      });

      it('onMouseOver()', () => {
        const wrapper = mount(testCheckbox);

        expect(wrapper.state().hovered).toBe(false);
        wrapper.simulate('mouseOver');
        expect(wrapper.state().hovered).toBe(true);
      });

      it('onMouseOut()', () => {
        const wrapper = mount(testCheckbox);

        wrapper.setState({ hovered: true });

        expect(wrapper.state().hovered).toBe(true);
        wrapper.simulate('mouseOut');
        expect(wrapper.state().hovered).toBe(false);
      });

      it('onTouchStart()', () => {
        const wrapper = mount(testCheckbox);

        expect(wrapper.state().hovered).toBe(false);
        wrapper.simulate('touchStart');
        expect(wrapper.state().hovered).toBe(true);
      });

      it('onTouchEnd()', () => {
        const wrapper = mount(testCheckbox);

        wrapper.setState({ hovered: true });

        expect(wrapper.state().hovered).toBe(true);
        wrapper.simulate('touchEnd');
        expect(wrapper.state().hovered).toBe(false);
      });
    });
  });
});
