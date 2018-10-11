import './SkinColorSchemes.scss';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

@hot(module)
class SkinColorSchemes extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    color: '',
    onChange: null,
  };

  constructor(props) {
    super(props);

    this.handleColor = this.handleColor.bind(this);

    const { color } = this.props;

    this.state = {
      color,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { color: prevColor } = this.props;
    const { color } = nextProps;

    if (color !== prevColor) {
      this.setState({
        color,
      });
    }
  }

  handleColor(color) {
    const { onChange } = this.props;

    this.setState({ color });

    if (onChange) {
      onChange(color);
    }
  }

  render() {
    const { color } = this.state;

    const colors = [
      'Black',
      'Red',
      'Green',
      'Blue',
      'Aero',
      'Grey',
      'Orange',
      'Yellow',
      'Pink',
      'Purple',
    ];

    const list = colors.map((listColor) => {
      let newColor = listColor.toLowerCase();
      if (newColor === 'black') {
        newColor = '';
      }

      return (
        <li
          className={classNames(newColor, { active: color === newColor })}
          key={newColor}
          title={listColor}
        >
          <button
            type="button"
            onClick={() => this.handleColor(newColor)}
          />
        </li>
      );
    });

    return (
      <div className="colors">
        <strong>Color schemes</strong>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default SkinColorSchemes;
