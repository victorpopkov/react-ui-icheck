import React from 'react';
import expect from 'expect';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from '../src/Checkbox';

describe('<Checkbox />', () => {
  describe('when no props are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Checkbox />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('when `label` prop is "test"', () => {
    it('should have <span /> with "test" text', () => {
      const { container } = render(<Checkbox label="test" />);
      expect(container.querySelector('span').innerHTML).toBe('test');
    });

    describe('when hovering <label />', () => {
      it('<div class="icheckbox" /> should have "hover" class while being hovered', () => {
        const { container } = render(<Checkbox label="test" />);
        const icheckboxElement = container.querySelector('.icheckbox');
        const labelElement = container.querySelector('label');
        fireEvent.mouseEnter(labelElement);
        expect(icheckboxElement).toHaveClass('hover');
        fireEvent.mouseLeave(labelElement);
        expect(icheckboxElement).not.toHaveClass('hover');
      });
    });

    describe('when touching <label />', () => {
      it('<div class="icheckbox" /> should have "hover" class while being touched', () => {
        const { container } = render(<Checkbox label="test" />);
        const icheckboxElement = container.querySelector('.icheckbox');
        const labelElement = container.querySelector('label');
        fireEvent.touchStart(labelElement);
        expect(icheckboxElement).toHaveClass('hover');
        fireEvent.touchEnd(labelElement);
        expect(icheckboxElement).not.toHaveClass('hover');
      });
    });
  });

  describe('when `checked` prop is `true`', () => {
    it('<input /> should have "checked" attribute', () => {
      const { container } = render(<Checkbox checked />);
      expect(container.querySelector('input')).toHaveAttribute('checked');
    });

    it('<div class="icheckbox" /> should have "checked" class', () => {
      const { container } = render(<Checkbox checked />);
      expect(container.querySelector('.icheckbox')).toHaveClass('checked');
    });
  });

  describe('when focusing <input />', () => {
    it('<div class="icheckbox" /> should have "focus" class while being focused', () => {
      const { container } = render(<Checkbox />);
      const icheckboxElement = container.querySelector('.icheckbox');
      const inputElement = container.querySelector('input');
      fireEvent.focus(inputElement);
      expect(icheckboxElement).toHaveClass('focus');
      fireEvent.blur(inputElement);
      expect(icheckboxElement).not.toHaveClass('focus');
    });
  });

  describe('when children are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Checkbox>label</Checkbox>);
      expect(container).toMatchSnapshot();
    });

    describe('and `labelTag` prop is "div"', () => {
      it('should match the snapshot', () => {
        const { container } = render(
          <Checkbox labelTag="div">
            <span>label</span>
          </Checkbox>,
        );
        const divElements = container
          .querySelector('label')
          .querySelectorAll('div');
        expect(divElements[1]).toMatchSnapshot();
      });
    });
  });
});
