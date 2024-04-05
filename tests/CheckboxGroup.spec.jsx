import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox, CheckboxGroup } from '../src';

describe('CheckboxGroup component', () => {
  describe('when all required props are passed', () => {
    let component;

    beforeEach(() => {
      console.warn = jest.fn();
      component = render(
        <CheckboxGroup>
          <Checkbox />
        </CheckboxGroup>,
      );
    });

    afterEach(() => {
      component.unmount();
    });

    it('should match the snapshot', () => {
      expect(component.container).toMatchSnapshot();
    });
  });

  describe('and `checkboxWrapClassName` prop is `test`', () => {
    describe('and `checkboxWrapTag` prop is `div`', () => {
      let component;

      beforeEach(() => {
        console.warn = jest.fn();
        component = render(
          <CheckboxGroup checkboxWrapClassName="test" checkboxWrapTag="div">
            <Checkbox />
          </CheckboxGroup>,
        );
      });

      it('should match the snapshot', () => {
        expect(component.container).toMatchSnapshot();
      });
    });
  });
});
