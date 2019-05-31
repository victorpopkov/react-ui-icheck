import PropTypes from 'prop-types';
import BaseInput from './BaseInput'; // eslint-disable-line sort-imports
import deprecated from './helpers/deprecated';

class Radio extends BaseInput {
  static propTypes = {
    ...BaseInput.propTypes,
    radioClass: deprecated(PropTypes.string, 'radioClassName'),
    radioClassName: PropTypes.string,
  };

  static defaultProps = {
    ...BaseInput.defaultProps,
    radioClass: null,
    radioClassName: 'iradio',
  };

  renderInput() {
    const { radioClass, radioClassName } = this.props;

    return super.renderInput({
      inputType: 'radio',
      radioClassName: radioClass || radioClassName,
    });
  }
}

export default Radio;
