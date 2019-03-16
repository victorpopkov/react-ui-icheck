import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mobile from 'is-mobile';
import Input from './components/Input'; // eslint-disable-line sort-imports
import Label from './components/Label';
import deprecated from './helpers/deprecated';

class Checkbox extends Component {
  static propTypes = {
    activeClass: deprecated(PropTypes.string, 'activeClassName'),
    activeClassName: PropTypes.string,
    aria: PropTypes.bool,
    checkboxClass: deprecated(PropTypes.string, 'checkboxClassName'),
    checkboxClassName: PropTypes.string,
    checked: PropTypes.bool,
    checkedClass: deprecated(PropTypes.string, 'checkedClassName'),
    checkedClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    determinateClass: PropTypes.string,
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
    indeterminateClass: PropTypes.string,
    inheritClass: PropTypes.bool,
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

  static defaultProps = {
    activeClass: 'active',
    activeClassName: 'active',
    aria: false,
    checkboxClass: 'icheckbox',
    checkboxClassName: 'icheckbox',
    checked: false,
    checkedClass: 'checked',
    checkedClassName: 'checked',
    children: null,
    className: null,
    defaultChecked: false,
    determinateClass: null,
    disabled: false,
    disabledClass: 'disabled',
    disabledClassName: 'disabled',
    focusClass: 'focus',
    focusClassName: 'focus',
    hoverClass: 'hover',
    hoverClassName: 'hover',
    id: null,
    increaseArea: '',
    indeterminate: true,
    indeterminateClass: 'indeterminate',
    inheritClass: false,
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

  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);

    const { checked } = props;

    this.state = {
      checked: checked || false,
      hovered: false,
      isMobile: mobile(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { checked } = this.props;
    const { checked: nextChecked } = nextProps;

    if ('checked' in nextProps && checked !== nextChecked) {
      this.setState({
        checked: nextChecked,
      });
    }
  }

  handleHover(event, isHovered) {
    this.setState({
      hovered: isHovered,
    });
  }

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
      inheritClass,
      inheritID,
      insert,
      name,
      onBlur,
      onChange,
      onFocus,
      value,

      checked,
      children,
      determinateClass,
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
        activeClass={activeClass}
        activeClassName={activeClassName}
        aria={aria}
        checkboxClass={checkboxClass}
        checkboxClassName={checkboxClassName}
        checked={stateChecked}
        checkedClass={checkedClass}
        checkedClassName={checkedClassName}
        className={className}
        defaultChecked={defaultChecked}
        disabled={disabled}
        disabledClass={disabledClass}
        disabledClassName={disabledClassName}
        focusClass={focusClass}
        focusClassName={focusClassName}
        hoverClass={hoverClass}
        hoverClassName={hoverClassName}
        hovered={hovered}
        id={id}
        increaseArea={increaseArea}
        indeterminate={indeterminate}
        indeterminateClass={indeterminateClass}
        inheritClass={inheritClass}
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

export default Checkbox;
