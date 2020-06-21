import { mount, shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Label from '../Label';

describe('Label component', () => {
  let wrapper;
  let handleHover;

  beforeEach(() => {
    handleHover = jest.fn();
  });

  afterEach(() => {
    handleHover.mockClear();
  });

  describe('when the required `handleHover` prop is passed', () => {
    describe('and the children are passed', () => {
      const testEventHandleHover = (description, event, called, arg) => {
        describe(`when ${description}`, () => {
          beforeEach(() => {
            wrapper.simulate(event);
          });

          it(`${
            called > 0 ? 'should call' : 'should not call'
          } the \`handleHover\` prop function`, () => {
            expect(handleHover).toHaveBeenCalledTimes(called);
          });

          if (called > 0) {
            it(`should have the \`handleHover\` prop function be called with \`${arg.toString()}\``, () => {
              expect(handleHover).toHaveBeenCalledWith(expect.anything(), arg);
            });
          }
        });
      };

      describe('as mount', () => {
        beforeEach(() => {
          wrapper = mount(
            <Label handleHover={handleHover}>
              <div>child</div>
            </Label>,
          );
        });

        it('should match the default props snapshot', () => {
          expect(wrapper.props()).toMatchSnapshot();
        });

        it('should not call the `handleHover` prop function', () => {
          expect(handleHover).toHaveBeenCalledTimes(0);
        });

        testEventHandleHover('focused', 'focus', 1, true);
        testEventHandleHover('blurred', 'blur', 1, false);
        testEventHandleHover('mouse over', 'mouseOver', 1, true);
        testEventHandleHover('mouse out', 'mouseOut', 1, false);
        testEventHandleHover('touch start', 'touchStart', 1, true);
        testEventHandleHover('touch end', 'touchEnd', 1, false);
      });

      describe('as shallow', () => {
        beforeEach(() => {
          wrapper = shallow(
            <Label handleHover={handleHover}>
              <div>child</div>
            </Label>,
          );
        });

        it('should match the snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });

        it('should not call the `handleHover` prop function', () => {
          expect(handleHover).toHaveBeenCalledTimes(0);
        });
      });

      describe('and the `label` prop is `<span>propLabel</span>`', () => {
        describe('as shallow', () => {
          beforeEach(() => {
            wrapper = shallow(
              <Label handleHover={handleHover} label={<span>propLabel</span>}>
                <div>child</div>
              </Label>,
            );
          });

          it('should match the snapshot', () => {
            expect(wrapper).toMatchSnapshot();
          });

          it('should not call the `handleHover` prop function', () => {
            expect(handleHover).toHaveBeenCalledTimes(0);
          });
        });
      });

      describe('and the `labelTag` prop is `div`', () => {
        describe('and the `labelTagClassName` prop is `test`', () => {
          describe('and the `label` prop is `propLabel`', () => {
            beforeEach(() => {
              wrapper = shallow(
                <Label
                  handleHover={handleHover}
                  label="propLabel"
                  labelTag="div"
                  labelTagClassName="test"
                >
                  <div>child</div>
                </Label>,
              );
            });

            it('should match the snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not call the `handleHover` prop function', () => {
              expect(handleHover).toHaveBeenCalledTimes(0);
            });
          });

          describe('and the `labelChildren` prop is `<span>propLabelChildren</span>`', () => {
            beforeEach(() => {
              wrapper = shallow(
                <Label
                  handleHover={handleHover}
                  labelChildren={<span>propLabelChildren</span>}
                  labelTag="div"
                  labelTagClassName="test"
                >
                  <div>child</div>
                </Label>,
              );
            });

            it('should match the snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not call the `handleHover` prop function', () => {
              expect(handleHover).toHaveBeenCalledTimes(0);
            });
          });
        });
      });

      describe('and the `disabled` prop is `true`', () => {
        describe('as mount', () => {
          beforeEach(() => {
            wrapper = mount(
              <Label handleHover={handleHover} disabled>
                <div>child</div>
              </Label>,
            );
          });

          testEventHandleHover('focused', 'focus', 0, false);
        });
      });

      describe('and the `isMobile` prop is `true`', () => {
        describe('as mount', () => {
          beforeEach(() => {
            wrapper = mount(
              <Label handleHover={handleHover} isMobile>
                <div>child</div>
              </Label>,
            );
          });

          testEventHandleHover('focused', 'focus', 1, true);
        });
      });
    });
  });
});
