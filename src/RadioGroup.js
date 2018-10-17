import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';

class RadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    radioWrapClassName: PropTypes.string,
    radioWrapTag: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    className: null,
    defaultValue: null,
    radioWrapClassName: null,
    radioWrapTag: null,
    value: null,
    onChange: null,
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
