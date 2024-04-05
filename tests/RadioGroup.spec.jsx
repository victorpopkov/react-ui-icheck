import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Radio, RadioGroup } from '../src';

describe('RadioGroup component', () => {
  describe('when all required props are passed', () => {
    let component;

    beforeEach(() => {
      component = render(
        <RadioGroup name="test">
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

    it('should match the default props snapshot', () => {
      expect(component.container.props).toMatchSnapshot();
    });

    it('should match the default state snapshot', () => {
      expect(component.container.state).toMatchSnapshot();
    });

    it('should not have <input type="radio" /> checked', () => {
      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons).toHaveLength(2);
      radioButtons.forEach((radioButton) => {
        expect(radioButton).not.toBeChecked();
      });
    });

    describe('and <RadioGroup /> `value` prop matches <Radio /> `value` prop', () => {
      beforeEach(() => {
        component.unmount();
        component = render(
          <RadioGroup name="test" value="1">
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>,
        );
      });

      it('should have the `checked` attribute for the corresponding <input type="radio" />', () => {
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons).toHaveLength(2);
        expect(radioButtons[0]).toBeChecked();
        expect(radioButtons[1]).not.toBeChecked();
      });
    });

    describe('and `radioWrapClassName` prop is `test`', () => {
      describe('and `radioWrapTag` prop is `div`', () => {
        beforeEach(() => {
          component.unmount();
          component = render(
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
          expect(component.container.firstChild).toMatchSnapshot();
        });

        describe('and `onChange` prop is passed', () => {
          let onChange;

          beforeEach(() => {
            onChange = jest.fn();
            component.unmount();
            component = render(
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
            expect(component.container.firstChild).toMatchSnapshot();
          });

          it('should not call the passed `onChange` function', () => {
            expect(onChange).toHaveBeenCalledTimes(0);
          });

          it('should not have <input type="radio" /> checked', () => {
            const radioButtons = screen.getAllByRole('radio');
            expect(radioButtons).toHaveLength(2);
            radioButtons.forEach((radioButton) => {
              expect(radioButton).not.toBeChecked();
            });
          });

          describe('and first `<input />` is changed', () => {
            beforeEach(() => {
              const radioButtons = screen.getAllByRole('radio');
              fireEvent.click(radioButtons[0]);
            });

            it('should call the passed `onChange` function', () => {
              expect(onChange).toHaveBeenCalledTimes(1);
            });

            it('should not have <input type="radio" /> checked', () => {
              const radioButtons = screen.getAllByRole('radio');
              expect(radioButtons).toHaveLength(2);
              expect(radioButtons[0]).toBeChecked();
              expect(radioButtons[1]).not.toBeChecked();
            });
          });

          describe('and last `<input />` is changed', () => {
            beforeEach(() => {
              const radioButtons = screen.getAllByRole('radio');
              fireEvent.click(radioButtons[1]);
            });

            it('should call the passed `onChange` function', () => {
              expect(onChange).toHaveBeenCalledTimes(1);
            });

            it('should not have <input type="radio" /> checked', () => {
              const radioButtons = screen.getAllByRole('radio');
              expect(radioButtons).toHaveLength(2);
              expect(radioButtons[0]).not.toBeChecked();
              expect(radioButtons[1]).toBeChecked();
            });
          });
        });
      });
    });
  });
});
