import PropTypes from 'prop-types';
import React from 'react';
import BaseInput from './BaseInput'; // eslint-disable-line sort-imports
import Input from './components/Input';
import deprecated from './helpers/deprecated';

class Checkbox extends BaseInput {
  static propTypes = {
    ...BaseInput.propTypes,
    checkboxClass: deprecated(PropTypes.string, 'checkboxClassName'),
    checkboxClassName: PropTypes.string,
  };

  static defaultProps = {
    ...BaseInput.defaultProps,
    checkboxClass: null,
    checkboxClassName: 'icheckbox',
  };

  renderInput() {
    const {
      activeClass,
      activeClassName,
      aria,
      checkboxClass,
      checkboxClassName,
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
      type,

      ...other
    } = this.props;
    const { checked: stateChecked, hovered, isMobile } = this.state;

    return (
      <Input
        {...other}
        activeClassName={activeClass || activeClassName}
        aria={aria}
        checkboxClassName={checkboxClass || checkboxClassName}
        checked={stateChecked}
        checkedClassName={checkedClass || checkedClassName}
        className={className}
        defaultChecked={defaultChecked}
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
        inputType="checkbox"
        insert={insert}
        isMobile={isMobile}
        name={name}
        ref={(c) => { this.input = c; }}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
    );
  }
}

export default Checkbox;
