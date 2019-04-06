import 'bootstrap/dist/css/bootstrap.min.css';
import 'icheck/skins/all.css';
import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Footer, Navbar } from './common'; // eslint-disable-line sort-imports

@hot(module)
class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
