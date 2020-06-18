import { mount, render, shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Input from '../Input'; // eslint-disable-line sort-imports

const testInputComponent = (inputType) => {
  let wrapper;

  describe('as mount', () => {
    beforeEach(() => {
      wrapper = mount(<Input inputType={inputType} />);
    });

    it('should match the default props snapshot', () => {
      expect(wrapper.props()).toMatchSnapshot();
    });

    it('should match the default state snapshot', () => {
      expect(wrapper.state()).toMatchSnapshot();
    });

    it('should have the `checked` state as `false`', () => {
      expect(wrapper.state().checked).toBe(false);
    });

    it('should have the `hovered` state as `false`', () => {
      expect(wrapper.state().hovered).toBe(false);
    });

    describe('but the `checked` prop has changed from `false` to `true`', () => {
      beforeEach(() => {
        wrapper.setProps({ checked: true });
      });

      it('should change the `checked` state from `false` to `true`', () => {
        expect(wrapper.state().checked).toBe(true);
      });
    });

    describe('but the `hovered` prop has changed from `false` to `true`', () => {
      beforeEach(() => {
        wrapper.setProps({ hovered: true });
      });

      it('should change the `hovered` state `false` => `true`', () => {
        expect(wrapper.state().hovered).toBe(true);
      });
    });

    describe('and the `<ins />` is clicked', () => {
      beforeEach(() => {
        wrapper.find('ins').simulate('click');
      });

      it('should have the `checked` state as `false`', () => {
        expect(wrapper.state().checked).toBe(false);
      });
    });
  });

  describe('and the `insert` prop is `<div>test</div>} />`', () => {
    describe('as render', () => {
      beforeEach(() => {
        wrapper = render(
          <Input inputType={inputType} insert={<div>test</div>} />,
        );
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('and the `aria` prop is `true`', () => {
    describe('as shallow', () => {
      beforeEach(() => {
        wrapper = shallow(<Input inputType={inputType} aria />);
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should have the `aria-checked` prop as `false`', () => {
        expect(wrapper.props()['aria-checked']).toBe(false);
      });
    });
  });

  describe('and the `className` prop is `test`', () => {
    describe('and the `inheritClassName` is `true`', () => {
      describe('as shallow', () => {
        beforeEach(() => {
          wrapper = shallow(
            <Input className="test" inputType={inputType} inheritClassName />,
          );
        });

        it(`should have the \`className\` prop as \`i${inputType} test\``, () => {
          expect(wrapper.props().className).toBe(`i${inputType} test`);
        });
      });
    });
  });

  describe('and the `id` prop is `test`', () => {
    describe('and the `inheritID` is `true`', () => {
      describe('as shallow', () => {
        beforeEach(() => {
          wrapper = shallow(
            <Input id="test" inputType={inputType} inheritID />,
          );
        });

        it('should have the `id` prop as `iCheck-test`', () => {
          expect(wrapper.props().id).toBe('iCheck-test');
        });
      });
    });
  });

  describe('and the `isMobile` prop is `true`', () => {
    describe('as shallow', () => {
      beforeEach(() => {
        wrapper = shallow(<Input inputType={inputType} isMobile />);
      });

      describe('an `<input />`', () => {
        beforeEach(() => {
          wrapper = wrapper.find('input');
        });

        it('should match style attribute to the snapshot', () => {
          expect(wrapper.prop('style')).toMatchSnapshot();
        });
      });
    });
  });

  describe('and the `increaseArea` prop is `30%`', () => {
    describe('as shallow', () => {
      beforeEach(() => {
        wrapper = shallow(<Input increaseArea="30%" inputType={inputType} />);
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('and the `increaseArea` prop is `-30%`', () => {
    describe('as shallow', () => {
      beforeEach(() => {
        wrapper = shallow(<Input increaseArea="-30%" inputType={inputType} />);
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('and the `increaseArea` prop is `-60%`', () => {
    describe('as shallow', () => {
      beforeEach(() => {
        wrapper = shallow(<Input increaseArea="-60%" inputType={inputType} />);
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('and the `onFocus` prop is passed', () => {
    let onFocus;

    beforeEach(() => {
      onFocus = jest.fn();
    });

    describe('as mount', () => {
      beforeEach(() => {
        wrapper = mount(<Input inputType={inputType} onFocus={onFocus} />);
      });

      it('should not call the passed `onFocus` function', () => {
        expect(onFocus).toHaveBeenCalledTimes(0);
      });

      it('should have the `focused` state as `false`', () => {
        expect(wrapper.state().focused).toBe(false);
      });

      describe('and the `<input />` is focused', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('focus');
        });

        it('should call the passed `onFocus` function', () => {
          expect(onFocus).toHaveBeenCalledTimes(1);
        });

        it('should have the `focused` state as `true`', () => {
          expect(wrapper.state().focused).toBe(true);
        });
      });
    });
  });

  describe('and the `onBlur` prop is passed', () => {
    let onBlur;

    beforeEach(() => {
      onBlur = jest.fn();
    });

    describe('as mount', () => {
      beforeEach(() => {
        wrapper = mount(<Input inputType={inputType} onBlur={onBlur} />);
      });

      describe('and with the `focused` state as `true`', () => {
        beforeEach(() => {
          wrapper.setState({ focused: true });
        });

        it('should not call the passed `onBlur` function', () => {
          expect(onBlur).toHaveBeenCalledTimes(0);
        });

        it('should have the `focused` state as `true`', () => {
          expect(wrapper.state().focused).toBe(true);
        });

        describe('and the `<input />` is blurred', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur');
          });

          it('should call the passed `onBlur` function', () => {
            expect(onBlur).toHaveBeenCalledTimes(1);
          });

          it('should have the `focused` state as `false`', () => {
            expect(wrapper.state().focused).toBe(false);
          });
        });
      });
    });
  });

  describe('and the `onChange` prop is passed', () => {
    let onChange;

    beforeEach(() => {
      onChange = jest.fn();
    });

    describe('as mount', () => {
      beforeEach(() => {
        wrapper = mount(<Input inputType={inputType} onChange={onChange} />);
      });

      it('should not call the passed `onChange` function', () => {
        expect(onChange).toHaveBeenCalledTimes(0);
      });

      it('should have the `checked` state as `false`', () => {
        expect(wrapper.state().checked).toBe(false);
      });

      describe('and the `<input />` is changed', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('change');
        });

        it('should call the passed `onChange` function', () => {
          expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('should have the `checked` state as `true`', () => {
          expect(wrapper.state().checked).toBe(true);
        });
      });
    });

    describe('and the `insert` prop is `Insert`', () => {
      describe('and the `label` prop is `Label`', () => {
        beforeEach(() => {
          wrapper = mount(
            <Input
              inputType={inputType}
              insert="Insert"
              label="Label"
              onChange={onChange}
            />,
          );
        });

        it('should not call the passed `onChange` function', () => {
          expect(onChange).toHaveBeenCalledTimes(0);
        });

        it('should have the `checked` state as `false`', () => {
          expect(wrapper.state().checked).toBe(false);
        });

        describe('and the `<ins />` is clicked', () => {
          beforeEach(() => {
            wrapper.find('ins').simulate('click');
          });

          it('should call the passed `onChange` function', () => {
            expect(onChange).toHaveBeenCalledTimes(1);
          });

          const state = inputType === 'checkbox';
          it(`should have the \`checked\` state as \`${state}\``, () => {
            expect(wrapper.state().checked).toBe(state);
          });
        });
      });
    });
  });

  describe('and the `disabled` prop is `true`', () => {
    beforeEach(() => {
      wrapper = mount(<Input inputType={inputType} disabled />);
    });

    describe('and the `<ins />` is clicked', () => {
      beforeEach(() => {
        wrapper.find('ins').simulate('click');
      });

      it('should have the `checked` state as `false`', () => {
        expect(wrapper.state().checked).toBe(false);
      });
    });
  });
};

describe('Input component', () => {
  describe('when the required `inputType` prop is set to `checkbox`', () => {
    testInputComponent('checkbox');
  });

  describe('when the required `inputType` prop is set to `radio`', () => {
    testInputComponent('radio');
  });
});
