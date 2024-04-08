import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import expect from 'expect';
import { fireEvent, render } from '@testing-library/react';
import Label from '../../src/components/Label';

describe('<Label />', () => {
  describe('when required props are not passed', () => {
    it('should call console.error()', () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      render(<Label />);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Warning: Failed %s type: %s%s',
        'prop',
        'The prop `children` is marked as required in `Label`, but its value is `undefined`.',
        expect.anything(),
      );
      consoleErrorSpy.mockRestore();
    });
  });

  describe('when required props are passed', () => {
    const testEventHandleHover = (description, event, called, arg) => {
      describe(`${description}`, () => {
        it(`${
          called > 0 ? 'should call' : 'should not call'
        } the \`handleHover\` prop function`, () => {
          const handleHover = jest.fn();
          const { container } = render(
            <Label handleHover={handleHover}>
              <div>test</div>
            </Label>,
          );
          expect(handleHover).toHaveBeenCalledTimes(0);
          fireEvent[event](container.querySelector('label'));
          expect(handleHover).toHaveBeenCalledTimes(called);
          expect(handleHover).toHaveBeenCalledWith(expect.anything(), arg);
        });
      });
    };

    it('should match the snapshot', () => {
      const { container } = render(
        <Label handleHover={jest.fn()}>
          <div>test</div>
        </Label>,
      );
      expect(container).toMatchSnapshot();
    });

    testEventHandleHover('and focused', 'focus', 1, true);
    testEventHandleHover('and blurred', 'blur', 1, false);
    testEventHandleHover('and has mouse over', 'mouseOver', 1, true);
    testEventHandleHover('and has mouse out', 'mouseOut', 1, false);
    testEventHandleHover('and touch starts', 'touchStart', 1, true);
    testEventHandleHover('and touch ends', 'touchEnd', 1, false);

    describe('when `label` prop is "test"', () => {
      it('should insert <span>test</span> after children', () => {
        const { container } = render(
          <Label handleHover={jest.fn()} label="test">
            <div>test</div>
          </Label>,
        );
        const labelElement = container.querySelector('div + span');
        expect(labelElement.tagName).toBe('SPAN');
        expect(labelElement.innerHTML).toEqual('test');
      });

      describe('and `labelChildren` prop is <div>test</div>', () => {
        it('should insert <span><div>test</div></span> after children', () => {
          const { container } = render(
            <Label
              handleHover={jest.fn()}
              label="test"
              labelChildren={<div>test</div>}
            >
              <div>test</div>
            </Label>,
          );
          const labelElement = container.querySelector('div + span');
          expect(labelElement.tagName).toBe('SPAN');
          expect(labelElement.innerHTML).toEqual('<div>test</div>');
        });
      });

      describe('and `labelTag` prop is "div"', () => {
        it('should insert <div>test</div> after children', () => {
          const { container } = render(
            <Label handleHover={jest.fn()} label="test" labelTag="div">
              <div>test</div>
            </Label>,
          );
          const labelElement = container.querySelector('div + div');
          expect(labelElement.tagName).toBe('DIV');
          expect(labelElement.innerHTML).toEqual('test');
        });
      });

      describe('and `labelTagClassName` prop is "test"', () => {
        it('should insert <span class="test">test</span> after children', () => {
          const { container } = render(
            <Label
              handleHover={jest.fn()}
              label="test"
              labelTagClassName="test"
            >
              <div>test</div>
            </Label>,
          );
          const labelElement = container.querySelector('div + span');
          expect(labelElement.tagName).toBe('SPAN');
          expect(labelElement.innerHTML).toEqual('test');
          expect(labelElement).toHaveClass('test');
        });
      });
    });
  });
});
