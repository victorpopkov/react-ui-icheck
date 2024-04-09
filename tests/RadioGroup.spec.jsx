import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import expect from 'expect';
import { Radio, RadioGroup } from '../src';

describe('<RadioGroup />', () => {
  describe('when no children are passed', () => {
    it('should call console.error()', () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      render(<RadioGroup />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Warning: Failed %s type: %s%s',
        'prop',
        'The prop `name` is marked as required in `RadioGroup`, but its value is `undefined`.',
        expect.anything(),
      );
      consoleErrorSpy.mockRestore();
    });
  });

  describe('when children and all required props are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(
        <RadioGroup name="test">
          <Radio value="1" />
          <Radio value="2" />
        </RadioGroup>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should not have <input type="radio" /> checked', () => {
      render(
        <RadioGroup name="test">
          <Radio value="1" />
          <Radio value="2" />
        </RadioGroup>,
      );
      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons).toHaveLength(2);
      radioButtons.forEach((radioButton) => {
        expect(radioButton).not.toBeChecked();
      });
    });

    describe('and `value` prop value matches <Radio /> `value` prop value', () => {
      it('should have the `checked` attribute for the corresponding <input type="radio" />', () => {
        render(
          <RadioGroup name="test" value="1">
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>,
        );
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons).toHaveLength(2);
        expect(radioButtons[0]).toBeChecked();
        expect(radioButtons[1]).not.toBeChecked();
      });
    });

    describe('and `radioWrapTag` prop is "span" and `radioWrapClassName` prop is "test"', () => {
      it('should match the snapshot', () => {
        const { container } = render(
          <RadioGroup name="test" radioWrapClassName="test" radioWrapTag="div">
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>,
        );
        expect(container).toMatchSnapshot();
      });
    });

    describe('and `onChange` prop is passed', () => {
      let component;
      let onChange;

      beforeEach(() => {
        onChange = jest.fn();
        component = render(
          <RadioGroup name="test" onChange={onChange}>
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>,
        );
      });

      afterEach(() => {
        component.unmount();
      });

      it('should match the snapshot', () => {
        expect(component.container).toMatchSnapshot();
      });

      it('should not call the passed `onChange` prop function', () => {
        expect(onChange).toHaveBeenCalledTimes(0);
      });

      it('should not have <input type="radio" /> checked', () => {
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons).toHaveLength(2);
        radioButtons.forEach((radioButton) => {
          expect(radioButton).not.toBeChecked();
        });
      });

      describe('and `<input />` is clicked', () => {
        it('should call the passed `onChange` prop function', () => {
          const radioButtons = screen.getAllByRole('radio');
          expect(onChange).toHaveBeenCalledTimes(0);

          fireEvent.click(radioButtons[0]);
          expect(onChange).toHaveBeenCalledTimes(1);

          fireEvent.click(radioButtons[1]);
          expect(onChange).toHaveBeenCalledTimes(2);
        });

        it('should have the corresponding <input type="radio" /> checked', () => {
          const radioButtons = screen.getAllByRole('radio');
          expect(radioButtons).toHaveLength(2);
          expect(radioButtons[1]).not.toBeChecked();
          expect(radioButtons[1]).not.toBeChecked();

          fireEvent.click(radioButtons[0]);
          expect(radioButtons[0]).toBeChecked();
          expect(radioButtons[1]).not.toBeChecked();

          fireEvent.click(radioButtons[1]);
          expect(radioButtons[0]).not.toBeChecked();
          expect(radioButtons[1]).toBeChecked();
        });
      });
    });
  });
});
