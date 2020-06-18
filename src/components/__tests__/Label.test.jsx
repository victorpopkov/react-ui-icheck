import { mount, shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Label from '../Label';

describe('<Label /> component', () => {
  const testLabel = (
    <Label handleHover={() => false}>
      <div>child</div>
    </Label>
  );

  it('should have the default props values when mounted', () => {
    const wrapper = mount(testLabel);
    expect(wrapper.props()).toMatchSnapshot();
  });

  describe('should render the <label />', () => {
    it('when only the default props are passed', () => {
      const wrapper = shallow(testLabel);
      expect(wrapper).toMatchSnapshot();
    });

    it('when label as element is passed', () => {
      const wrapper = shallow(
        <Label handleHover={() => false} label={<span>propLabel</span>}>
          <div>child</div>
        </Label>,
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('when label as string with labelTag and labelTagClassName are passed', () => {
      const wrapper = shallow(
        <Label
          handleHover={() => false}
          label="propLabel"
          labelTag="div"
          labelTagClassName="test"
        >
          <div>child</div>
        </Label>,
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('when labelChildren, labelTag and labelTagClassName are passed', () => {
      const wrapper = shallow(
        <Label
          handleHover={() => false}
          labelChildren={<span>propLabelChildren</span>}
          labelTag="div"
          labelTagClassName="test"
        >
          <div>child</div>
        </Label>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should handle the <label />', () => {
    const testSpy = jest.fn();
    const testSpyLabel = mount(
      <Label handleHover={testSpy}>
        <div>child</div>
      </Label>,
    );

    afterEach(() => {
      testSpy.mockClear();
    });

    describe('onFocus()', () => {
      it('with the default behaviour', () => {
        expect(testSpy).not.toHaveBeenCalled();
        testSpyLabel.simulate('focus');
        expect(testSpy).toHaveBeenCalledWith(expect.anything(), true);
      });

      it('when disabled', () => {
        const wrapper = mount(
          <Label handleHover={testSpy}>
            <div>child</div>
          </Label>,
        );

        expect(testSpy).not.toHaveBeenCalled();

        wrapper.setProps({ disabled: true });
        wrapper.simulate('focus');

        expect(testSpy).not.toHaveBeenCalled();
      });

      it('when on mobiles', () => {
        const wrapper = mount(
          <Label handleHover={testSpy} isMobile>
            <div>child</div>
          </Label>,
        );

        wrapper.simulate('focus');

        expect(testSpy).toHaveBeenCalled();
      });
    });

    it('onBlur()', () => {
      expect(testSpy).not.toHaveBeenCalled();
      testSpyLabel.simulate('blur');
      expect(testSpy).toHaveBeenCalledWith(expect.anything(), false);
    });

    it('onMouseOver()', () => {
      expect(testSpy).not.toHaveBeenCalled();
      testSpyLabel.simulate('mouseOver');
      expect(testSpy).toHaveBeenCalledWith(expect.anything(), true);
    });

    it('onMouseOut()', () => {
      expect(testSpy).not.toHaveBeenCalled();
      testSpyLabel.simulate('mouseOut');
      expect(testSpy).toHaveBeenCalledWith(expect.anything(), false);
    });

    it('onTouchStart()', () => {
      expect(testSpy).not.toHaveBeenCalled();
      testSpyLabel.simulate('touchStart');
      expect(testSpy).toHaveBeenCalledWith(expect.anything(), true);
    });

    it('onTouchEnd()', () => {
      expect(testSpy).not.toHaveBeenCalled();
      testSpyLabel.simulate('touchEnd');
      expect(testSpy).toHaveBeenCalledWith(expect.anything(), false);
    });
  });
});
