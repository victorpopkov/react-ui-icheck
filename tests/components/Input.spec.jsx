import React from 'react';
import expect from 'expect';
import { fireEvent, render } from '@testing-library/react';
import Input from '../../src/components/Input';

const testInputComponent = (inputType) => {
  const inputClass = `i${inputType}`;

  describe('when no props are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Input inputType={inputType} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('when `aria` prop is `true`', () => {
    it(`<div class="${inputClass}" /> should have the corresponding \`aria-checked\` attribute while being clicked`, () => {
      const { container } = render(<Input inputType={inputType} aria />);
      const element = container.querySelector(`.${inputClass}`);
      const inputElement = container.querySelector('input');
      expect(element).toHaveAttribute('aria-checked', 'false');
      fireEvent.click(inputElement);
      expect(element).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('when `checked` prop is `true`', () => {
    it('<input /> should have "checked" attribute', () => {
      const { container } = render(<Input inputType={inputType} checked />);
      expect(container.querySelector('input')).toHaveAttribute('checked');
    });

    it(`<div class="${inputClass}" /> should have "checked" class`, () => {
      const { container } = render(<Input inputType={inputType} checked />);
      expect(container.querySelector(`.${inputClass}`)).toHaveClass('checked');
    });
  });

  describe('when `className` prop is "test"', () => {
    describe('and `inheritClassName` is `false`', () => {
      it(`<div class="${inputClass}" /> should not have "test" class`, () => {
        const { container } = render(
          <Input
            inputType={inputType}
            className="test"
            inheritClassName={false}
          />,
        );
        expect(container.querySelector(`.${inputClass}`)).not.toHaveClass(
          'test',
        );
      });
    });

    describe('and `inheritClassName` is `true`', () => {
      it(`<div class="${inputClass}" /> should have "test" class`, () => {
        const { container } = render(
          <Input inputType={inputType} className="test" inheritClassName />,
        );
        expect(container.querySelector(`.${inputClass}`)).toHaveClass('test');
      });
    });
  });

  describe('and `disabled` prop is `true`', () => {
    it('<input /> should have "disabled" attribute', () => {
      const { container } = render(<Input inputType={inputType} disabled />);
      const inputElement = container.querySelector('input');
      expect(inputElement).toHaveAttribute('disabled');
      fireEvent.click(inputElement);
      expect(inputElement).toHaveAttribute('disabled');
    });

    it(`<div class="${inputClass}" /> should have "disabled" class`, () => {
      const { container } = render(<Input inputType={inputType} disabled />);
      const element = container.querySelector(`.${inputClass}`);
      expect(element).toHaveClass('disabled');
      fireEvent.click(container.querySelector('input'));
      expect(element).toHaveClass('disabled');
    });
  });

  describe('when `id` prop is "test"', () => {
    describe('and `inheritID` is `false`', () => {
      it(`<div class="${inputClass}" /> should not have "test" class`, () => {
        const { container } = render(
          <Input inputType={inputType} id="test" inheritID={false} />,
        );
        expect(container.querySelector(`.${inputClass}`)).not.toHaveClass(
          'id',
          'iCheck-test',
        );
      });
    });

    describe('and `inheritID` is `true`', () => {
      it(`<div class="${inputClass}" /> should have "test" class`, () => {
        const { container } = render(
          <Input inputType={inputType} id="test" inheritID />,
        );
        expect(container.querySelector(`.${inputClass}`)).toHaveAttribute(
          'id',
          'iCheck-test',
        );
      });
    });
  });

  describe('when `increaseArea` prop', () => {
    const commonStyles = {
      background: 'rgb(255, 255, 255)',
      border: 0,
      cursor: 'pointer',
      display: 'block',
      margin: 0,
      opacity: 0,
      padding: 0,
      position: 'absolute',
    };

    it('is "30%"', () => {
      const { container } = render(
        <Input inputType={inputType} increaseArea="30%" />,
      );
      expect(container.querySelector('input')).toHaveStyle({
        ...commonStyles,
        height: '160%',
        left: '-30%',
        top: '-30%',
        width: '160%',
      });
    });

    it('is "-30%', () => {
      const { container } = render(
        <Input inputType={inputType} increaseArea="-30%" />,
      );
      expect(container.querySelector('input')).toHaveStyle({
        ...commonStyles,
        height: '40%',
        left: '30%',
        top: '30%',
        width: '40%',
      });
    });

    it('is "-60%', () => {
      const { container } = render(
        <Input inputType={inputType} increaseArea="-60%" />,
      );
      expect(container.querySelector('input')).toHaveStyle({
        ...commonStyles,
        height: '0%',
        left: '50%',
        top: '50%',
        width: '0%',
      });
    });
  });

  describe('when `insert` prop is <div>test</div>', () => {
    it('should insert that element after <input />', () => {
      const { container } = render(
        <Input inputType={inputType} insert={<div>test</div>} />,
      );
      const insertElement = container.querySelector('input + div');
      expect(insertElement.tagName).toBe('DIV');
      expect(insertElement.innerHTML).toEqual('test');
    });
  });

  describe('when `isMobile` prop is `true`', () => {
    it('<input /> should have the corresponding style', () => {
      const { container } = render(<Input inputType={inputType} isMobile />);
      expect(container.querySelector('input')).toHaveStyle({
        visibility: 'hidden',
        position: 'absolute',
      });
    });
  });

  describe('when focusing <input />', () => {
    it('should call `onFocus` prop function', () => {
      const onFocus = jest.fn();
      const { container } = render(
        <Input inputType={inputType} onFocus={onFocus} />,
      );
      expect(onFocus).toHaveBeenCalledTimes(0);
      fireEvent.focus(container.querySelector('input'));
      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it(`<div class="${inputClass}" /> should have "focus" class while being focused`, () => {
      const { container } = render(<Input inputType={inputType} />);
      const element = container.querySelector(`.${inputClass}`);
      const inputElement = container.querySelector('input');
      fireEvent.focus(inputElement);
      expect(element).toHaveClass('focus');
      fireEvent.blur(inputElement);
      expect(element).not.toHaveClass('focus');
    });
  });

  describe('when blurring <input />', () => {
    it('should call `onBlur` prop function', () => {
      const onBlur = jest.fn();
      const { container } = render(
        <Input inputType={inputType} onBlur={onBlur} />,
      );
      expect(onBlur).toHaveBeenCalledTimes(0);
      fireEvent.blur(container.querySelector('input'));
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('when changing <input />', () => {
    it('should call `onChange` prop function', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Input inputType={inputType} onChange={onChange} />,
      );
      expect(onChange).toHaveBeenCalledTimes(0);
      fireEvent.click(container.querySelector('input'));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('when changing <ins />', () => {
    describe('and `label` prop is `null`', () => {
      describe('and `insert` prop is `null`', () => {
        it('should not call `onChange` prop function', () => {
          const onChange = jest.fn();
          const { container } = render(
            <Input inputType={inputType} onChange={onChange} />,
          );
          expect(onChange).toHaveBeenCalledTimes(0);
          fireEvent.click(container.querySelector('ins'));
          expect(onChange).toHaveBeenCalledTimes(0);
        });
      });
    });

    describe('and `label` prop is "test"', () => {
      describe('and `insert` prop is "test"', () => {
        describe('and `disabled` prop is `false`', () => {
          it('should call `onChange` prop function', () => {
            const onChange = jest.fn();
            const { container } = render(
              <Input
                inputType={inputType}
                onChange={onChange}
                label="test"
                insert="test"
                disabled={false}
              />,
            );
            expect(onChange).toHaveBeenCalledTimes(0);
            fireEvent.click(container.querySelector('ins'));
            expect(onChange).toHaveBeenCalledTimes(1);
          });
        });

        describe('and `disabled` prop is `true`', () => {
          it('should not call `onChange` prop function', () => {
            const onChange = jest.fn();
            const { container } = render(
              <Input
                inputType={inputType}
                onChange={onChange}
                label="test"
                insert="test"
                disabled
              />,
            );
            expect(onChange).toHaveBeenCalledTimes(0);
            fireEvent.click(container.querySelector('ins'));
            expect(onChange).toHaveBeenCalledTimes(0);
          });
        });
      });
    });
  });
};

describe('<Input />', () => {
  describe('when `inputType` prop is "checkbox"', () => {
    testInputComponent('checkbox');
  });

  describe('when `inputType` prop is "radio"', () => {
    testInputComponent('radio');
  });
});
