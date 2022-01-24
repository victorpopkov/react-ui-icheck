import PropTypes from 'prop-types';
import BaseInput from './BaseInput'; // eslint-disable-line sort-imports

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
  radioClassName: PropTypes.string,
};

Radio.defaultProps = {
  ...BaseInput.defaultProps,
  radioClass: null,
  radioClassName: 'iradio',
};

export default Radio;
