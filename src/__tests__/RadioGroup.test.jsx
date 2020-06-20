import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Radio, RadioGroup } from '../index';

describe('RadioGroup component', () => {
  let wrapper;

  describe('when the required `name` prop is set to `test`', () => {
    describe('as mount', () => {
      beforeEach(() => {
        wrapper = mount(
          <RadioGroup name="test">
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>,
        );
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should match the default props snapshot', () => {
        expect(wrapper.props()).toMatchSnapshot();
      });

      it('should match the default state snapshot', () => {
        expect(wrapper.state()).toMatchSnapshot();
      });

      it('should have the `value` prop as `null`', () => {
        expect(wrapper.props().value).toBe(null);
      });

      it('should have the `value` state as ``', () => {
        expect(wrapper.state().value).toBe('');
      });

      describe('and the `value` prop has changed from `` to `test`', () => {
        beforeEach(() => {
          wrapper.setProps({ value: 'test' });
        });

        it('should have the `checked` prop as `test`', () => {
          expect(wrapper.props().value).toBe('test');
        });

        it('should have the `checked` state as `test`', () => {
          expect(wrapper.state().value).toBe('test');
        });
      });
    });

    describe('and the `radioWrapClassName` prop is `test`', () => {
      describe('and the `radioWrapTag` prop is `div`', () => {
        describe('as mount', () => {
          beforeEach(() => {
            wrapper = mount(
              <RadioGroup
                name="test"
                radioWrapClassName="test"
                radioWrapTag="div"
              >
                <Radio value="1" />
                <Radio value="2" />
              </RadioGroup>,
            );
          });

          it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot();
          });
        });

        describe('and the `onChange` prop is passed', () => {
          let onChange;

          beforeEach(() => {
            onChange = jest.fn();
          });

          describe('as mount', () => {
            beforeEach(() => {
              wrapper = mount(
                <RadioGroup
                  name="test"
                  radioWrapClassName="test"
                  radioWrapTag="div"
                  onChange={onChange}
                >
                  <Radio value="1" />
                  <Radio value="2" />
                </RadioGroup>,
              );
            });

            it('should match the snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not call the passed `onChange` function', () => {
              expect(onChange).toHaveBeenCalledTimes(0);
            });

            it('should have the `value` state as ``', () => {
              expect(wrapper.state().value).toBe('');
            });

            describe('and the first `<input />` is changed', () => {
              beforeEach(() => {
                wrapper.find('input').first().simulate('change');
              });

              it('should call the passed `onChange` function', () => {
                expect(onChange).toHaveBeenCalledTimes(1);
              });

              it('should have the `value` state as `1`', () => {
                expect(wrapper.state().value).toBe('1');
              });
            });

            describe('and the last `<input />` is changed', () => {
              beforeEach(() => {
                wrapper.find('input').last().simulate('change');
              });

              it('should call the passed `onChange` function', () => {
                expect(onChange).toHaveBeenCalledTimes(1);
              });

              it('should have the `value` state as `2`', () => {
                expect(wrapper.state().value).toBe('2');
              });
            });
          });
        });
      });
    });
  });
});
