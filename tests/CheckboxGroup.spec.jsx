import React from 'react';
import expect from 'expect';
import { render } from '@testing-library/react';
import { Checkbox, CheckboxGroup } from '../src';

describe('<CheckboxGroup />', () => {
  describe('when no children are passed', () => {
    it('should call console.error()', () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      render(<CheckboxGroup />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Warning: Failed %s type: %s%s',
        'prop',
        'The prop `children` is marked as required in `CheckboxGroup`, but its value is `undefined`.',
        expect.anything(),
      );
      consoleErrorSpy.mockRestore();
    });
  });

  describe('when children are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(
        <CheckboxGroup>
          <Checkbox />
        </CheckboxGroup>,
      );
      expect(container).toMatchSnapshot();
    });

    describe('and `checkboxWrapTag` prop is "span" and `checkboxWrapClassName` prop is "test"', () => {
      it('should match the snapshot', () => {
        const { container } = render(
          <CheckboxGroup checkboxWrapTag="span" checkboxWrapClassName="test">
            <Checkbox />
          </CheckboxGroup>,
        );
        expect(container).toMatchSnapshot();
      });
    });

    describe('and `className` prop is "test"', () => {
      it('should match the snapshot', () => {
        const { container } = render(
          <CheckboxGroup className="test">
            <Checkbox />
          </CheckboxGroup>,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
