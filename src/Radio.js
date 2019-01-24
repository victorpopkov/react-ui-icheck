import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mobile from 'is-mobile';
import Input from './components/Input'; // eslint-disable-line sort-imports
import Label from './components/Label';

class Radio extends Component {
  static propTypes = {
    activeClass: PropTypes.string,
    aria: PropTypes.bool,
    checked: PropTypes.bool,
    checkedClass: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    determinateClass: PropTypes.string,
    disabled: PropTypes.bool,
    disabledClass: PropTypes.string,
    focusClass: PropTypes.string,
    hoverClass: PropTypes.string,
    id: PropTypes.string,
    increaseArea: PropTypes.string,
    indeterminate: PropTypes.bool,
    indeterminateClass: PropTypes.string,
    inheritClass: PropTypes.bool,
    inheritID: PropTypes.bool,
    insert: PropTypes.node,
    isMobile: PropTypes.bool,
    label: PropTypes.node,
    labelClassName: PropTypes.string,
    labelHover: PropTypes.bool,
    labelHoverClass: PropTypes.string,
    labelTag: PropTypes.string,
    labelTagClassName: PropTypes.string,
    name: PropTypes.string,
    radioClass: PropTypes.string,
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
    aria: false,
    checked: false,
    checkedClass: 'checked',
    children: null,
    className: null,
    defaultChecked: false,
    determinateClass: null,
    disabled: false,
    disabledClass: 'disabled',
    focusClass: 'focus',
    hoverClass: 'hover',
    id: null,
    increaseArea: '',
    indeterminate: true,
    indeterminateClass: 'indeterminate',
    inheritClass: false,
    inheritID: false,
    insert: null,
    isMobile: false,
    label: null,
    labelClassName: null,
    labelHover: true,
    labelHoverClass: 'hover',
    labelTag: 'span',
    labelTagClassName: null,
    name: null,
    radioClass: 'iradio',
    type: null,
    value: null,
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

    if (checked !== nextChecked) {
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
      aria,
      checkedClass,
      className,
      defaultChecked,
      disabled,
      disabledClass,
      focusClass,
      hoverClass,
      id,
      increaseArea,
      indeterminate,
      indeterminateClass,
      inheritClass,
      inheritID,
      insert,
      isMobile,
      name,
      onBlur,
      onChange,
      onFocus,
      radioClass,
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
    const { checked: stateChecked, hovered } = this.state;

    return (
      <Input
        {...other}
        activeClass={activeClass}
        aria={aria}
        checked={stateChecked}
        checkedClass={checkedClass}
        className={className}
        defaultChecked={defaultChecked}
        disabled={disabled}
        disabledClass={disabledClass}
        focusClass={focusClass}
        hoverClass={hoverClass}
        hovered={hovered}
        id={id}
        increaseArea={increaseArea}
        indeterminate={indeterminate}
        indeterminateClass={indeterminateClass}
        inheritClass={inheritClass}
        inheritID={inheritID}
        inputType="radio"
        insert={insert}
        isMobile={isMobile}
        name={name}
        radioClass={radioClass}
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

export default Radio;
