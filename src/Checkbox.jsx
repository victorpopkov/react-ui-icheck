import PropTypes from 'prop-types';
import BaseInput from './BaseInput'; // eslint-disable-line sort-imports

class Checkbox extends BaseInput {
  renderInput() {
    const { checkboxClass, checkboxClassName } = this.props;

    return super.renderInput({
      checkboxClassName: checkboxClass || checkboxClassName,
      inputType: 'checkbox',
    });
  }
}

Checkbox.propTypes = {
  ...BaseInput.propTypes,
  checkboxClassName: PropTypes.string,
};

Checkbox.defaultProps = {
  ...BaseInput.defaultProps,
  checkboxClass: null,
  checkboxClassName: 'icheckbox',
};

export default Checkbox;
