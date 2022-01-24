import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mobile from 'is-mobile';
import Input from './components/Input'; // eslint-disable-line sort-imports
import Label from './components/Label';

class BaseInput extends Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);

    const { checked } = props;

    this.state = {
      hovered: false,
      isMobile: mobile(),
      prevPropChecked: props.checked,
      checked,
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
      activeClassName,
      aria,
      checkedClassName,
      className,
      disabled,
      disabledClassName,
      focusClassName,
      hoverClassName,
      id,
      increaseArea,
      indeterminate,
      indeterminateClassName,
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
        activeClassName={activeClassName}
        aria={aria}
        checked={stateChecked}
        checkedClassName={checkedClassName}
        className={className}
        disabled={disabled}
        disabledClassName={disabledClassName}
        focusClassName={focusClassName}
        hoverClassName={hoverClassName}
        hovered={hovered}
        id={id}
        increaseArea={increaseArea}
        indeterminate={indeterminate}
        indeterminateClassName={indeterminateClassName}
        inheritClassName={inheritClassName}
        inheritID={inheritID}
        insert={insert}
        isMobile={isMobile}
        name={name}
        ref={(c) => {
          // eslint-disable-next-line react/no-unused-class-component-methods
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
  activeClassName: PropTypes.string,
  aria: PropTypes.bool,
  checked: PropTypes.bool,
  checkedClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  focusClassName: PropTypes.string,
  hoverClassName: PropTypes.string,
  id: PropTypes.string,
  increaseArea: PropTypes.string,
  indeterminate: PropTypes.bool,
  indeterminateClassName: PropTypes.string,
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
  activeClassName: 'active',
  aria: false,
  checked: false,
  checkedClassName: 'checked',
  children: null,
  className: null,
  disabled: false,
  disabledClassName: 'disabled',
  focusClassName: 'focus',
  hoverClassName: 'hover',
  id: null,
  increaseArea: '',
  indeterminate: true,
  indeterminateClassName: 'indeterminate',
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
