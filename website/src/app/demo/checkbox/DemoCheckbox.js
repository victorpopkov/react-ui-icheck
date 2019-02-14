import {
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import DemoCheckboxDefault from './DemoCheckboxDefault'; // eslint-disable-line sort-imports
import DemoCheckboxInline from './DemoCheckboxInline';
import DemoCheckboxProperties from './DemoCheckboxProperties';

@hot(module)
class DemoCheckbox extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: 'default',
    };
  }

  toggleTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Col md={12}>
        <h4 className="mt-4">Checkbox</h4>
        <Nav className="mt-4" tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'default' })}
              onClick={() => { this.toggleTab('default'); }}
            >
              Default
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'inline' })}
              onClick={() => { this.toggleTab('inline'); }}
            >
              Inline
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={activeTab}
          className="mb-4"
        >
          <TabPane tabId="default">
            <DemoCheckboxDefault />
          </TabPane>
          <TabPane tabId="inline">
            <DemoCheckboxInline />
          </TabPane>
        </TabContent>
        <DemoCheckboxProperties />
      </Col>
    );
  }
}

export default DemoCheckbox;
