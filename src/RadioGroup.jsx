import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';

class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const { defaultValue, value } = props;

    const stateValue = value || defaultValue || '';

    this.state = {
      prevValue: null,
      value: stateValue,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.prevValue !== props.value && props.value !== state.value) {
      return {
        prevValue: state.value,
        value: props.value,
      };
    }

    return {
      prevValue: props.value,
    };
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

    const { onChange, value, ...other } = props;

    const radio = (
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

      return <WrapTag className={radioWrapClassName}>{radio}</WrapTag>;
    }

    return radio;
  }

  render() {
    const { children, className } = this.props;

    const options = React.Children.map(children, (option) =>
      this.renderRadio(option.props),
    );

    return <div className={className}>{options}</div>;
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  radioWrapClassName: PropTypes.string,
  radioWrapTag: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  children: null,
  className: null,
  defaultValue: null,
  radioWrapClassName: null,
  radioWrapTag: null,
  value: null,
  onChange: null,
};

export default RadioGroup;
