import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const iCheck = 'iCheck';
const iCheckHelper = `${iCheck}-helper`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHelperClick = this.handleHelperClick.bind(this);

    const { checked, defaultChecked, hovered, indeterminate } = props;

    this.state = {
      active: false,
      checked: defaultChecked || checked,
      focused: false,
      prevChecked: null,
      prevHovered: null,
      hovered,
      indeterminate,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      state.prevChecked !== props.checked &&
      props.checked !== state.checked
    ) {
      return {
        checked: props.defaultChecked || props.checked,
        prevChecked: state.prevChecked,
      };
    }

    if (
      state.prevHovered !== props.hovered &&
      props.hovered !== state.hovered
    ) {
      return {
        hovered: props.hovered,
        prevHovered: state.prevHovered,
      };
    }

    return {
      prevChecked: props.checked,
      prevHovered: props.hovered,
    };
  }

  handleBlur(event) {
    const { onBlur } = this.props;

    this.setState({ focused: false });

    if (onBlur) onBlur(event);
  }

  handleChange(event) {
    const { onChange } = this.props;
    const { checked } = event.target;

    this.setState((state) => ({ checked: !state.checked }));

    if (onChange) onChange(event, checked);
  }

  handleFocus(event) {
    const { onFocus } = this.props;

    this.setState({ focused: true });

    if (onFocus) onFocus(event);
  }

  handleHelperClick(event) {
    const { disabled, inputType, insert, label, onChange } = this.props;
    const { checked } = this.state;

    if ((!label && !insert) || disabled) return;

    if (inputType.toString() === 'checkbox')
      this.setState((state) => ({ checked: !state.checked }));

    event.preventDefault();
    event.stopPropagation();

    if (onChange) {
      // make sure <ins /> element is not target
      event.target = this.checkbox; // eslint-disable-line no-param-reassign
      onChange(event, checked);
    }
  }

  render() {
    const {
      activeClassName,
      aria,
      checkboxClassName,
      checkedClassName,
      className,
      disabled,
      disabledClassName,
      focusClassName,
      hoverClassName,
      id,
      increaseArea,
      indeterminateClassName,
      inheritClassName,
      inheritID,
      inputType,
      insert,
      isMobile,
      name,
      radioClassName,
      value,

      defaultChecked,
      hovered,
      indeterminate,

      ...other
    } = this.props;

    const {
      active,
      checked,
      focused,
      hovered: stateHovered,
      indeterminate: stateIndeterminate,
    } = this.state;

    const wrapProps = {
      className: classNames({
        [checkboxClassName]: inputType.toString() === 'checkbox',
        [radioClassName]: inputType.toString() === 'radio',
        [indeterminateClassName]: stateIndeterminate,
        [checkedClassName]: checked,
        [disabledClassName]: disabled,
        [hoverClassName]: stateHovered,
        [focusClassName]: focused,
        [activeClassName]: active,
      }),
    };

    if (inheritClassName)
      wrapProps.className = classNames(wrapProps.className, className);

    if (inheritID && id) wrapProps.id = `${iCheck}-${id}`;

    if (aria) {
      wrapProps.role = inputType;
      // Set ARIA "labelledby"
      wrapProps['aria-labelledby'] = wrapProps.id;
      wrapProps['aria-checked'] = checked;
    }

    // Clickable area
    let area = `${increaseArea}`.replace('%', '') || 0;
    if (area < -50) area = -50;

    // Layer styles
    const offset = `${-area}%`;
    const size = `${100 + area * 2}%`;
    const layer = {
      position: 'absolute',
      top: offset,
      left: offset,
      display: 'block',
      width: size,
      height: size,
      margin: 0,
      padding: 0,
      background: '#fff',
      border: 0,
      opacity: 0,
      cursor: disabled ? 'default' : 'pointer',
    };

    // Layer addition
    const helper = (
      <ins
        className={iCheckHelper}
        role="presentation"
        style={layer}
        onClick={this.handleHelperClick}
      />
    );

    // Choose how to hide input
    let hide;
    if (isMobile) {
      hide = {
        position: 'absolute',
        visibility: 'hidden',
      };
    } else if (area) {
      hide = layer;
    } else {
      hide = {
        opacity: 0,
        position: 'absolute',
      };
    }

    const inputElement = (
      <input
        {...other}
        checked={checked}
        disabled={disabled}
        name={name}
        ref={(c) => {
          this.checkbox = c;
        }}
        style={hide}
        type={inputType}
        value={value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
      />
    );

    let insertElement = null;
    if (insert) {
      insertElement = React.isValidElement(insert) ? (
        insert
      ) : (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: insert }} />
      );
    }

    return (
      <div {...wrapProps}>
        {inputElement}
        {insertElement}
        {helper}
      </div>
    );
  }
}

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  aria: PropTypes.bool,
  checkboxClassName: PropTypes.string,
  checked: PropTypes.bool,
  checkedClassName: PropTypes.string,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  focusClassName: PropTypes.string,
  hoverClassName: PropTypes.string,
  hovered: PropTypes.bool,
  id: PropTypes.string,
  increaseArea: PropTypes.string,
  indeterminate: PropTypes.bool,
  indeterminateClassName: PropTypes.string,
  inheritClassName: PropTypes.bool,
  inheritID: PropTypes.bool,
  insert: PropTypes.node,
  isMobile: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  radioClassName: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  activeClassName: null,
  aria: false,
  checkboxClassName: 'icheckbox',
  checked: false,
  checkedClassName: 'checked',
  className: null,
  defaultChecked: false,
  disabled: false,
  disabledClassName: 'disabled',
  focusClassName: 'focus',
  hoverClassName: 'hover',
  hovered: false,
  id: null,
  increaseArea: '',
  indeterminate: false,
  indeterminateClassName: 'indeterminate',
  inheritClassName: false,
  inheritID: false,
  insert: null,
  isMobile: false,
  label: null,
  name: null,
  radioClassName: 'iradio',
  value: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
};

export default Input;
