import React from 'react';
import expect from 'expect';
import { fireEvent, render } from '@testing-library/react';
import Radio from '../src/Radio';

describe('<Radio />', () => {
  describe('when no props are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Radio />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('when `label` prop is "test"', () => {
    it('should have <span /> with "test" text', () => {
      const { container } = render(<Radio label="test" />);
      expect(container.querySelector('span').innerHTML).toBe('test');
    });

    describe('when hovering <label />', () => {
      it('<div class="iradio" /> should have "hover" class while being hovered', () => {
        const { container } = render(<Radio label="test" />);
        const iradioElement = container.querySelector('.iradio');
        const labelElement = container.querySelector('label');
        fireEvent.mouseEnter(labelElement);
        expect(iradioElement).toHaveClass('hover');
        fireEvent.mouseLeave(labelElement);
        expect(iradioElement).not.toHaveClass('hover');
      });
    });

    describe('when touching <label />', () => {
      it('<div class="iradio" /> should have "hover" class while being touched', () => {
        const { container } = render(<Radio label="test" />);
        const iradioElement = container.querySelector('.iradio');
        const labelElement = container.querySelector('label');
        fireEvent.touchStart(labelElement);
        expect(iradioElement).toHaveClass('hover');
        fireEvent.touchEnd(labelElement);
        expect(iradioElement).not.toHaveClass('hover');
      });
    });
  });

  describe('when `checked` prop is `true`', () => {
    it('<input /> should have "checked" attribute', () => {
      const { container } = render(<Radio checked />);
      expect(container.querySelector('input')).toHaveAttribute('checked');
    });

    it('<div class="iradio" /> should have "checked" class', () => {
      const { container } = render(<Radio checked />);
      expect(container.querySelector('.iradio')).toHaveClass('checked');
    });
  });

  describe('when children are passed', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Radio>label</Radio>);
      expect(container).toMatchSnapshot();
    });

    describe('and `labelTag` prop is "div"', () => {
      it('should match the snapshot', () => {
        const { container } = render(
          <Radio labelTag="div">
            <span>label</span>
          </Radio>,
        );
        const divElements = container
          .querySelector('label')
          .querySelectorAll('div');
        expect(divElements[1]).toMatchSnapshot();
      });
    });
  });
});
