import PropTypes from 'prop-types';
import BaseInput from './BaseInput'; // eslint-disable-line sort-imports
import deprecated from './helpers/deprecated';

class Radio extends BaseInput {
  renderInput() {
    const { radioClass, radioClassName } = this.props;

    return super.renderInput({
      inputType: 'radio',
      radioClassName: radioClass || radioClassName,
    });
  }
}

Radio.propTypes = {
  ...BaseInput.propTypes,
  radioClass: deprecated(PropTypes.string, 'radioClassName'),
  radioClassName: PropTypes.string,
};

Radio.defaultProps = {
  ...BaseInput.defaultProps,
  radioClass: null,
  radioClassName: 'iradio',
};

export default Radio;
