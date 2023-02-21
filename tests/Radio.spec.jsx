import { mount, render } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Radio from '../src/Radio';

describe('Radio component', () => {
  let wrapper;

  beforeEach(() => {
    console.warn = jest.fn();
  });

  describe('as mount', () => {
    beforeEach(() => {
      wrapper = mount(<Radio />);
    });

    it('should not call the deprecated console.warn()', () => {
      expect(console.warn).toHaveBeenCalledTimes(0);
    });

    it('should match the default props snapshot', () => {
      expect(wrapper.props()).toMatchSnapshot();
    });

    it('should match the default state snapshot', () => {
      expect(wrapper.state()).toMatchSnapshot();
    });
  });

  describe('as render', () => {
    beforeEach(() => {
      wrapper = render(<Radio />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('and the `label` prop is `label`', () => {
    describe('as render', () => {
      beforeEach(() => {
        wrapper = render(<Radio label="label" />);
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('as mount', () => {
      beforeEach(() => {
        wrapper = mount(<Radio label="label" />);
      });

      it('should have the `checked` prop as `false`', () => {
        expect(wrapper.props().checked).toBe(false);
      });

      it('should have the `checked` state as `false`', () => {
        expect(wrapper.state().checked).toBe(false);
      });

      it('should have the `hovered` state as `false`', () => {
        expect(wrapper.state().hovered).toBe(false);
      });

      describe('and the `checked` prop has changed from `false` to `true`', () => {
        beforeEach(() => {
          wrapper.setProps({ checked: true });
        });

        it('should have the `checked` prop as `true`', () => {
          expect(wrapper.props().checked).toBe(true);
        });

        it('should have the `checked` state as `true`', () => {
          expect(wrapper.state().checked).toBe(true);
        });
      });

      describe('and the `hovered` state as `false`', () => {
        beforeEach(() => {
          wrapper.setState({ hovered: false });
        });

        describe('when focused', () => {
          beforeEach(() => {
            wrapper.simulate('focus');
          });

          it('should have the `hovered` state as `true`', () => {
            expect(wrapper.state().hovered).toBe(true);
          });
        });

        describe('when mouse over', () => {
          beforeEach(() => {
            wrapper.simulate('mouseOver');
          });

          it('should have the `hovered` state as `true`', () => {
            expect(wrapper.state().hovered).toBe(true);
          });
        });

        describe('when touch start', () => {
          beforeEach(() => {
            wrapper.simulate('touchStart');
          });

          it('should have the `hovered` state as `true`', () => {
            expect(wrapper.state().hovered).toBe(true);
          });
        });
      });

      describe('and the `hovered` state as `true`', () => {
        beforeEach(() => {
          wrapper.setState({ hovered: true });
        });

        describe('when blurred', () => {
          beforeEach(() => {
            wrapper.simulate('blur');
          });

          it('should have the `hovered` state as `false`', () => {
            expect(wrapper.state().hovered).toBe(false);
          });
        });

        describe('when mouse out', () => {
          beforeEach(() => {
            wrapper.simulate('mouseOut');
          });

          it('should have the `hovered` state as `false`', () => {
            expect(wrapper.state().hovered).toBe(false);
          });
        });

        describe('when touch end', () => {
          beforeEach(() => {
            wrapper.simulate('touchEnd');
          });

          it('should have the `hovered` state as `false`', () => {
            expect(wrapper.state().hovered).toBe(false);
          });
        });
      });
    });
  });

  describe('and the children are passed', () => {
    describe('and the `labelTag` prop is `div`', () => {
      describe('as render', () => {
        beforeEach(() => {
          wrapper = render(
            <Radio labelTag="div">
              <span>label</span>
            </Radio>,
          );
        });

        it('should match the snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
      });
    });
  });
});
