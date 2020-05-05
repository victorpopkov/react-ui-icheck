import PropTypes from 'prop-types';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import deprecated from '../deprecated'; // eslint-disable-line sort-imports

describe('deprecated helper', () => {
  const TestComponent = () => null;

  TestComponent.propTypes = {
    testProp: PropTypes.string,
    testPropDeprecated: deprecated(PropTypes.string, 'newProp'),
  };

  beforeEach(() => {
    console.warn = jest.fn();
  });

  describe('when mounting a React component', () => {
    it("shouldn't throw a console.warn when not using a deprecated property", () => {
      mount(<TestComponent testProp="test" />);
      expect(console.warn).toHaveBeenCalledTimes(0);
    });

    it('should throw a console.warn when using a deprecated property', () => {
      mount(<TestComponent testPropDeprecated="test" />);
      expect(console.warn).toHaveBeenCalledTimes(1);
    });
  });
});
