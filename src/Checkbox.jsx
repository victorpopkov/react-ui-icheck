import PropTypes from 'prop-types';
import BaseInput from './BaseInput'; // eslint-disable-line sort-imports
import deprecated from './helpers/deprecated';

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
  checkboxClass: deprecated(PropTypes.string, 'checkboxClassName'),
  checkboxClassName: PropTypes.string,
};

Checkbox.defaultProps = {
  ...BaseInput.defaultProps,
  checkboxClass: null,
  checkboxClassName: 'icheckbox',
};

export default Checkbox;
