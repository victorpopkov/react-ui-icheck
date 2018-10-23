import { mount, render, shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Input from '../Input'; // eslint-disable-line sort-imports

const testInputComponent = (inputType) => {
  const testInput = <Input inputType={inputType} />;
  const testSpy = jest.spyOn(Input.prototype, 'componentWillReceiveProps');

  afterEach(() => {
    testSpy.mockClear();
  });

  it('should have the default props values when mounted', () => {
    const wrapper = mount(testInput);
    expect(wrapper.props()).toMatchSnapshot();
  });

  it('should render the corresponding HTML when the insert value is set', () => {
    const input = (
      <Input
        inputType={inputType}
        insert={(
          <div>test</div>
        )}
      />
    );

    const wrapper = render(input);
    expect(wrapper).toMatchSnapshot();
  });

  describe('should render wrapper', () => {
    it('with corresponding className when inheritClass is passed', () => {
      const wrapper = shallow(<Input className="test" inputType={inputType} inheritClass />);
      expect(wrapper.props().className).toBe(`i${inputType} test`);
    });

    it('with corresponding id when inheritID is passed', () => {
      const wrapper = shallow(<Input id="test" inputType={inputType} inheritID />);
      expect(wrapper.props().id).toBe('iCheck-test');
    });

    describe('with aria labels ', () => {
      const testAriaInput = <Input inputType={inputType} aria />;

      it('when aria prop is passed', () => {
        const wrapper = shallow(testAriaInput);
        expect(wrapper).toMatchSnapshot();
      });

      it('when aria prop is passed and the checked state changes', () => {
        const wrapper = shallow(testAriaInput);

        expect(wrapper.props()['aria-checked']).toBe(false);
        wrapper.setState({ checked: true });
        expect(wrapper.props()['aria-checked']).toBe(true);
      });
    });
  });

  describe('should render the <input />', () => {
    it('on mobiles', () => {
      const wrapper = shallow(testInput);
      wrapper.setProps({ isMobile: true });
      expect(wrapper.find('input').prop('style')).toMatchSnapshot();
    });

    describe('when increaseArea is passed', () => {
      it('as a positive value', () => {
        const wrapper = shallow(<Input increaseArea="30%" inputType={inputType} />);
        expect(wrapper).toMatchSnapshot();
      });

      it('as a negative value', () => {
        const wrapper = shallow(<Input increaseArea="-30%" inputType={inputType} />);
        expect(wrapper.find('input').props()).toMatchSnapshot();
      });

      it('as a negative value and more than 50%', () => {
        const wrapper = shallow(<Input increaseArea="-60%" inputType={inputType} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('should update the state', () => {
    it('when the checked prop has changed', () => {
      const wrapper = mount(testInput);

      expect(testSpy).toHaveBeenCalledTimes(0);
      expect(wrapper.props().checked).toBe(false);
      expect(wrapper.state().checked).toBe(false);

      wrapper.setProps({ checked: true });

      expect(testSpy).toHaveBeenCalledTimes(1);
      expect(wrapper.props().checked).toBe(true);
      expect(wrapper.state().checked).toBe(true);
    });

    it('when the hovered prop has changed', () => {
      const wrapper = mount(testInput);

      expect(testSpy).toHaveBeenCalledTimes(0);
      expect(wrapper.props().hovered).toBe(false);
      expect(wrapper.state().hovered).toBe(false);

      wrapper.setProps({ hovered: true });

      expect(testSpy).toHaveBeenCalledTimes(1);
      expect(wrapper.props().hovered).toBe(true);
      expect(wrapper.state().hovered).toBe(true);
    });
  });

  describe('should handle the <input />', () => {
    it('onFocus()', () => {
      const spy = jest.fn();
      const wrapper = mount(<Input inputType={inputType} onFocus={spy} />);

      expect(spy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().focused).toBe(false);

      wrapper.find('input').simulate('focus');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.state().focused).toBe(true);
    });

    it('onBlur()', () => {
      const spy = jest.fn();
      const wrapper = mount(<Input inputType={inputType} onBlur={spy} />);

      wrapper.setState({ focused: true });

      expect(spy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().focused).toBe(true);

      wrapper.find('input').simulate('blur');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.state().focused).toBe(false);
    });

    it('onChange()', () => {
      const spy = jest.fn();
      const wrapper = mount(<Input inputType={inputType} onChange={spy} />);

      expect(spy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().checked).toBe(false);

      wrapper.find('input').simulate('change');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.state().checked).toBe(true);
    });
  });

  describe('should handle the <ins />', () => {
    it('onClick()', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <Input
          inputType={inputType}
          insert="Insert"
          label="Label"
          onChange={spy}
        />
      );

      expect(spy).toHaveBeenCalledTimes(0);
      expect(wrapper.state().checked).toBe(false);

      wrapper.find('ins').simulate('click');

      expect(spy).toHaveBeenCalledTimes(1);

      if (inputType === 'checkbox') {
        expect(wrapper.state().checked).toBe(true);
      } else {
        expect(wrapper.state().checked).toBe(false);
      }
    });

    it('onClick() when both label and insert are not set', () => {
      const wrapper = mount(testInput);

      expect(wrapper.state().checked).toBe(false);
      wrapper.find('ins').simulate('click');
      expect(wrapper.state().checked).toBe(false);
    });

    it('onClick() when disabled', () => {
      const wrapper = mount(<Input inputType={inputType} disabled />);

      expect(wrapper.state().checked).toBe(false);
      wrapper.find('ins').simulate('click');
      expect(wrapper.state().checked).toBe(false);
    });
  });
};

describe('<Input /> component', () => {
  describe('with the prop inputType set to "checkbox"', () => {
    testInputComponent('checkbox');
  });

  describe('with the prop inputType set to "radio"', () => {
    testInputComponent('radio');
  });
});
