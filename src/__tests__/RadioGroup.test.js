import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Radio, RadioGroup } from '../index'; // eslint-disable-line sort-imports

describe('<RadioGroup /> component', () => {
  const testRadioGroup = (
    <RadioGroup name="test">
      <Radio />
    </RadioGroup>
  );

  it('should have the default props values when mounted', () => {
    const wrapper = mount(testRadioGroup);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render the corresponding HTML', () => {
    it('when only the default props are set', () => {
      const wrapper = mount(testRadioGroup);
      expect(wrapper).toMatchSnapshot();
    });

    it('when the radioWrapClassName and radioWrapTag props values are set', () => {
      const wrapper = mount(
        <RadioGroup name="test" radioWrapClassName="test" radioWrapTag="div">
          <Radio />
        </RadioGroup>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should update the state', () => {
    it('when the value prop has changed', () => {
      const spy = jest.spyOn(Radio.prototype, 'componentWillReceiveProps');
      const wrapper = mount(testRadioGroup);

      expect(spy).toHaveBeenCalledTimes(0);
      expect(wrapper.props().value).toBe(null);
      expect(wrapper.state().value).toBe('');

      wrapper.setProps({ value: 'test' });

      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.props().value).toBe('test');
      expect(wrapper.state().value).toBe('test');
    });

    describe('when handling the <input />', () => {
      it('onChange()', () => {
        const spy = jest.fn();
        const wrapper = mount(
          <RadioGroup
            name="test"
            radioWrapClassName="test"
            radioWrapTag="div"
            onChange={spy}
          >
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>
        );

        expect(wrapper).toMatchSnapshot();

        expect(spy).toHaveBeenCalledTimes(0);
        expect(wrapper.state().value).toBe('');

        wrapper.find('input').first().simulate('change');

        expect(spy).toHaveBeenCalledTimes(1);
        expect(wrapper.state().value).toBe('1');

        wrapper.find('input').last().simulate('change');

        expect(spy).toHaveBeenCalledTimes(2);
        expect(wrapper.state().value).toBe('2');
      });
    });
  });
});
