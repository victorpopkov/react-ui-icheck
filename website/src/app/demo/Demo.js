import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import DemoCheckbox from './DemoCheckbox'; // eslint-disable-line sort-imports
import DemoRadio from './DemoRadio';

@hot(module)
class Demo extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: 'checkbox',
    };
  }

  toggleTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="demo">
        <h2 className="mb-4">Demo</h2>
        <Nav className="mt-4" tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'checkbox' })}
              onClick={() => { this.toggleTab('checkbox'); }}
            >
              Checkbox
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'radio' })}
              onClick={() => { this.toggleTab('radio'); }}
            >
              Radio
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={activeTab}
          className="mb-4"
        >
          <TabPane tabId="checkbox">
            <DemoCheckbox />
          </TabPane>
          <TabPane tabId="radio">
            <DemoRadio />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Demo;
