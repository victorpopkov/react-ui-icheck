import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common'; // eslint-disable-line sort-imports
import DemoCheckbox from './DemoCheckbox';
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
      <main role="main">
        <Jumbotron />
        <Container>
          <Row>
            <Col md={9}>
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
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </main>
    );
  }
}

export default Demo;
