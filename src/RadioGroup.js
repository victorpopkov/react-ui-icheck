/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';

class RadioGroup extends Component {
  static propTypes = {
    /**
     * Should be used to pass `Radio` components.
     */
    name: PropTypes.string.isRequired,

    /**
     * The css class name of the root element.
     */
    children: PropTypes.node,

    /**
     * Sets the default radio button to be the one whose value matches defaultValue
     * (case-sensitive). This will override any individual radio button with the defaultChecked or
     * checked property stated.
     */
    className: PropTypes.string,

    /**
     * The name that will be applied to all radio buttons inside it.
     */
    defaultValue: PropTypes.string,

    radioWrapClassName: PropTypes.string,
    radioWrapTag: PropTypes.string,

    /**
     * Callback function that is fired when a radio button has been clicked. Returns the event and
     * the value of the radio button that has been selected.
     */
    value: PropTypes.string,

    /**
     * The value of the currently selected radio button.
     */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    radioWrapClassName: null,
    radioWrapTag: null,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const { defaultValue, value } = props;

    const stateValue = value || defaultValue || '';

    this.state = {
      value: stateValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  handleChange(event) {
    const { onChange } = this.props;

    const { value } = event.target;

    this.setState({
      value,
    });

    if (onChange) {
      onChange(event, value);
    }
  }

  renderRadio(props) {
    const { radioWrapClassName, radioWrapTag } = this.props;
    const { value: stateValue } = this.state;

    const {
      onChange,
      value,
      ...other
    } = props;

    const checkbox = (
      <Radio
        {...other}
        checked={value === stateValue}
        key={value}
        value={value}
        onChange={this.handleChange}
      />
    );

    if (radioWrapTag) {
      const WrapTag = radioWrapTag;

      return (
        <WrapTag className={radioWrapClassName}>
          {checkbox}
        </WrapTag>
      );
    }

    return checkbox;
  }

  render() {
    const { children, className } = this.props;

    const options = React.Children.map(children, option => this.renderRadio(option.props), this);

    return (
      <div className={className}>
        {options}
      </div>
    );
  }
}

export default RadioGroup;
