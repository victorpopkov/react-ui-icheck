import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import beautify from 'js-beautify';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import reactElementToJSXString from 'react-element-to-jsx-string';

@hot(module)
class Source extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    srcAppend: PropTypes.string,
    srcFunctionValue: PropTypes.string,
    srcPrepend: PropTypes.string,
  };

  static defaultProps = {
    srcAppend: '',
    srcFunctionValue: '',
    srcPrepend: '',
  };

  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: 'source',
    };
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  toggleTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const {
      children,
      srcAppend,
      srcFunctionValue,
      srcPrepend,
    } = this.props;
    const { activeTab } = this.state;

    let html = ReactDOMServer.renderToStaticMarkup(children);

    // label
    html = html.replace(/(<label>)/g, '\n$1');
    html = html.replace(/(<\/label>)/g, '$1\n');

    // input
    html = html.replace(/(<input)/g, '\n$1');

    // ins
    html = html.replace(/(<ins)/g, '\n$1');
    html = html.replace(/(<\/ins>)/g, '$1\n');

    return (
      <div>
        <Nav className="mt-4" tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'source' })}
              onClick={() => { this.toggleTab('source'); }}
            >
              Source
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'rendered' })}
              onClick={() => { this.toggleTab('rendered'); }}
            >
              Rendered
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={activeTab}
          className="mb-4"
        >
          <TabPane tabId="source">
            <pre>
              <code className="language-jsx">
                {`${srcPrepend}${reactElementToJSXString(children, {
                  functionValue: () => {
                    if (srcFunctionValue) {
                      return srcFunctionValue;
                    }

                    return '() => {}';
                  },
                  showDefaultProps: false,
                })}${srcAppend}`}
              </code>
            </pre>
          </TabPane>
          <TabPane tabId="rendered">
            <pre>
              <code className="language-html">
                {beautify.html(
                  html,
                  {
                    indent_size: 2,
                  }
                )}
              </code>
            </pre>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Source;
