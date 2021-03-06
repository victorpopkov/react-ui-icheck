import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mobile from 'is-mobile';
import Input from './components/Input'; // eslint-disable-line sort-imports
import Label from './components/Label';
import deprecated from './helpers/deprecated';

class BaseInput extends Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);

    const { checked, defaultChecked } = props;

    this.state = {
      checked: defaultChecked || checked,
      hovered: false,
      isMobile: mobile(),
      prevPropChecked: props.checked,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.prevPropChecked !== props.checked) {
      return {
        checked: props.checked,
        prevPropChecked: props.checked,
      };
    }

    return null;
  }

  handleHover(event, hovered) {
    this.setState({ hovered });
  }

  renderInput(props) {
    const {
      activeClass,
      activeClassName,
      aria,
      checkedClass,
      checkedClassName,
      className,
      defaultChecked,
      disabled,
      disabledClass,
      disabledClassName,
      focusClass,
      focusClassName,
      hoverClass,
      hoverClassName,
      id,
      increaseArea,
      indeterminate,
      indeterminateClass,
      indeterminateClassName,
      inheritClass,
      inheritClassName,
      inheritID,
      insert,
      name,
      onBlur,
      onChange,
      onFocus,
      value,

      checkboxClass, // eslint-disable-line react/prop-types
      checked,
      children,
      label,
      labelClassName,
      labelHover,
      labelHoverClass,
      labelTag,
      labelTagClassName,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchStart,
      radioClass, // eslint-disable-line react/prop-types
      type,

      ...other
    } = this.props;
    const { checked: stateChecked, hovered, isMobile } = this.state;

    return (
      <Input
        {...other}
        {...props}
        activeClassName={activeClass || activeClassName}
        aria={aria}
        checked={stateChecked}
        checkedClassName={checkedClass || checkedClassName}
        className={className}
        disabled={disabled}
        disabledClassName={disabledClass || disabledClassName}
        focusClassName={focusClass || focusClassName}
        hoverClassName={hoverClass || hoverClassName}
        hovered={hovered}
        id={id}
        increaseArea={increaseArea}
        indeterminate={indeterminate}
        indeterminateClassName={indeterminateClass || indeterminateClassName}
        inheritClassName={inheritClass || inheritClassName}
        inheritID={inheritID}
        insert={insert}
        isMobile={isMobile}
        name={name}
        ref={(c) => {
          this.input = c;
        }}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
    );
  }

  render() {
    const {
      children,
      disabled,
      label,
      labelClassName,
      labelHover,
      labelTag,
      labelTagClassName,
    } = this.props;
    const { isMobile } = this.state;

    if (!label && !children) {
      return this.renderInput();
    }

    return (
      <Label
        disabled={disabled}
        handleHover={this.handleHover}
        isMobile={isMobile}
        label={label}
        labelChildren={children}
        labelClassName={labelClassName}
        labelHover={labelHover}
        labelTag={labelTag}
        labelTagClassName={labelTagClassName}
      >
        {this.renderInput()}
      </Label>
    );
  }
}

BaseInput.propTypes = {
  activeClass: deprecated(PropTypes.string, 'activeClassName'),
  activeClassName: PropTypes.string,
  aria: PropTypes.bool,
  checked: PropTypes.bool,
  checkedClass: deprecated(PropTypes.string, 'checkedClassName'),
  checkedClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultChecked: deprecated(PropTypes.bool, 'checked'),
  disabled: PropTypes.bool,
  disabledClass: deprecated(PropTypes.string, 'disabledClassName'),
  disabledClassName: PropTypes.string,
  focusClass: deprecated(PropTypes.string, 'focusClassName'),
  focusClassName: PropTypes.string,
  hoverClass: deprecated(PropTypes.string, 'hoverClassName'),
  hoverClassName: PropTypes.string,
  id: PropTypes.string,
  increaseArea: PropTypes.string,
  indeterminate: PropTypes.bool,
  indeterminateClass: deprecated(PropTypes.string, 'indeterminateClassName'),
  indeterminateClassName: PropTypes.string,
  inheritClass: deprecated(PropTypes.bool, 'inheritClassName'),
  inheritClassName: PropTypes.bool,
  inheritID: PropTypes.bool,
  insert: PropTypes.node,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  labelHover: PropTypes.bool,
  labelHoverClass: PropTypes.string,
  labelTag: PropTypes.string,
  labelTagClassName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
};

BaseInput.defaultProps = {
  activeClass: null,
  activeClassName: 'active',
  aria: false,
  checked: false,
  checkedClass: null,
  checkedClassName: 'checked',
  children: null,
  className: null,
  defaultChecked: null,
  disabled: false,
  disabledClass: null,
  disabledClassName: 'disabled',
  focusClass: null,
  focusClassName: 'focus',
  hoverClass: null,
  hoverClassName: 'hover',
  id: null,
  increaseArea: '',
  indeterminate: true,
  indeterminateClass: null,
  indeterminateClassName: 'indeterminate',
  inheritClass: null,
  inheritClassName: false,
  inheritID: false,
  insert: null,
  label: null,
  labelClassName: null,
  labelHover: true,
  labelHoverClass: 'hover',
  labelTag: 'span',
  labelTagClassName: null,
  name: null,
  type: null,
  value: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  onMouseDown: null,
  onMouseLeave: null,
  onMouseUp: null,
  onTouchEnd: null,
  onTouchStart: null,
};

export default BaseInput;
