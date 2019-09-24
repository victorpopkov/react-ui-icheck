import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox'; // eslint-disable-line sort-imports

class CheckboxGroup extends Component {
  renderCheckbox(props) {
    const { checkboxWrapClassName, checkboxWrapTag } = this.props;
    const { value, ...other } = props;

    const checkbox = (
      <Checkbox
        {...other}
        key={value}
        value={value}
      />
    );

    if (checkboxWrapTag) {
      const WrapTag = checkboxWrapTag;

      return (
        <WrapTag className={checkboxWrapClassName}>
          {checkbox}
        </WrapTag>
      );
    }

    return checkbox;
  }

  render() {
    const {
      children,
      className,

      checkboxWrapClassName,
      checkboxWrapTag,

      ...other
    } = this.props;

    const options = React.Children.map(
      children,
      (option) => this.renderCheckbox(option.props),
      this
    );

    return (
      <div {...other} className={className}>
        {options}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  checkboxWrapClassName: PropTypes.string,
  checkboxWrapTag: PropTypes.string,
  className: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  checkboxWrapClassName: null,
  checkboxWrapTag: null,
  className: null,
};

export default CheckboxGroup;
