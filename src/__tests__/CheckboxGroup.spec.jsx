import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Checkbox, CheckboxGroup } from '../index';

describe('CheckboxGroup component', () => {
  let wrapper;

  beforeEach(() => {
    console.warn = jest.fn();
  });

  describe('when no props are passed', () => {
    describe('as mount', () => {
      beforeEach(() => {
        wrapper = mount(
          <CheckboxGroup>
            <Checkbox />
          </CheckboxGroup>,
        );
      });

      it('should call the deprecated console.warn()', () => {
        expect(console.warn).toHaveBeenCalledTimes(1);
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should match the default props snapshot', () => {
        expect(wrapper.props()).toMatchSnapshot();
      });
    });
  });

  describe('and the `checkboxWrapClassName` prop is `test`', () => {
    describe('and the `checkboxWrapTag` prop is `div`', () => {
      describe('as mount', () => {
        beforeEach(() => {
          wrapper = mount(
            <CheckboxGroup checkboxWrapClassName="test" checkboxWrapTag="div">
              <Checkbox />
            </CheckboxGroup>,
          );
        });

        it('should match the snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
  });
});
