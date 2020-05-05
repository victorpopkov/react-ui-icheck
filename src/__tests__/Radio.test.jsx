import { mount, render } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Radio from '../Radio'; // eslint-disable-line sort-imports

describe('<Radio /> component', () => {
  it('should have the default props values when mounted', () => {
    const wrapper = mount(<Radio />);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render the corresponding HTML', () => {
    it('when only the default props are set', () => {
      const wrapper = render(<Radio />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when the label is set as a prop string value', () => {
      const wrapper = render(<Radio label="label" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when the label is set as children with labelTag prop set to <div />', () => {
      const wrapper = render(
        <Radio labelTag="div">
          <span>label</span>
        </Radio>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should update the state', () => {
    const testRadio = <Radio label="label" />;

    it('when the checked prop has changed', () => {
      const spy = jest.spyOn(Radio.prototype, 'componentWillReceiveProps');
      const wrapper = mount(testRadio);

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
        const wrapper = mount(testRadio);

        expect(wrapper.state().hovered).toBe(false);
        wrapper.simulate('focus');
        expect(wrapper.state().hovered).toBe(true);
      });

      it('onBlur()', () => {
        const wrapper = mount(testRadio);

        wrapper.setState({ hovered: true });

        expect(wrapper.state().hovered).toBe(true);
        wrapper.simulate('blur');
        expect(wrapper.state().hovered).toBe(false);
      });

      it('onMouseOver()', () => {
        const wrapper = mount(testRadio);

        expect(wrapper.state().hovered).toBe(false);
        wrapper.simulate('mouseOver');
        expect(wrapper.state().hovered).toBe(true);
      });

      it('onMouseOut()', () => {
        const wrapper = mount(testRadio);

        wrapper.setState({ hovered: true });

        expect(wrapper.state().hovered).toBe(true);
        wrapper.simulate('mouseOut');
        expect(wrapper.state().hovered).toBe(false);
      });

      it('onTouchStart()', () => {
        const wrapper = mount(testRadio);

        expect(wrapper.state().hovered).toBe(false);
        wrapper.simulate('touchStart');
        expect(wrapper.state().hovered).toBe(true);
      });

      it('onTouchEnd()', () => {
        const wrapper = mount(testRadio);

        wrapper.setState({ hovered: true });

        expect(wrapper.state().hovered).toBe(true);
        wrapper.simulate('touchEnd');
        expect(wrapper.state().hovered).toBe(false);
      });
    });
  });
});
