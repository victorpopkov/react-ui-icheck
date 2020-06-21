import PropTypes from 'prop-types';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import deprecated from '../deprecated'; // eslint-disable-line sort-imports

describe('deprecated helper', () => {
  beforeEach(() => {
    console.warn = jest.fn();
  });

  describe('in the test component', () => {
    let TestComponent;

    beforeEach(() => {
      TestComponent = () => null;
      TestComponent.propTypes = {
        testProp: PropTypes.string,
        testPropDeprecated: deprecated(PropTypes.string, 'newProp'),
      };
    });

    describe('when not using a deprecated prop', () => {
      describe('as mount', () => {
        beforeEach(() => {
          mount(<TestComponent testProp="test" />);
        });

        it('should not throw a console.warn()', () => {
          expect(console.warn).toHaveBeenCalledTimes(0);
        });
      });
    });

    describe('when using a deprecated prop', () => {
      describe('as mount', () => {
        beforeEach(() => {
          mount(<TestComponent testPropDeprecated="test" />);
        });

        it('should throw a console.warn()', () => {
          expect(console.warn).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
