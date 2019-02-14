import { Checkbox, CheckboxGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
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
import { Example, Jumbotron, Sidebar } from '../common'; // eslint-disable-line sort-imports
import CheckboxProperties from './CheckboxProperties';

@hot(module)
class CheckboxPage extends Component {
  constructor(props) {
    super(props);

    this.toggleActiveTab = this.toggleActiveTab.bind(this);

    this.state = {
      activeTab: 'examples',
    };
  }

  toggleActiveTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
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
              <h2 className="heading">Checkbox</h2>
              <Nav className="mt-4" tabs>
                <NavItem>
                  <NavLink
                    className={classNames({ active: activeTab === 'examples' })}
                    onClick={() => { this.toggleActiveTab('examples'); }}
                  >
                    Examples
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classNames({ active: activeTab === 'properties' })}
                    onClick={() => { this.toggleActiveTab('properties'); }}
                  >
                    Properties
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                activeTab={activeTab}
                className="mb-4"
              >
                <TabPane tabId="examples">
                  <Example
                    srcPrepend={`import 'icheck/skins/all.css';
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';\n\n`}
                    title="Default"
                  >
                    <CheckboxGroup
                      checkboxWrapClassName="form-check"
                      checkboxWrapTag="div"
                    >
                      <Checkbox
                        checkboxClass="icheckbox_square-blue"
                        increaseArea="30%"
                        label="#checkbox-1"
                      />
                      <Checkbox
                        checkboxClass="icheckbox_square-blue"
                        increaseArea="30%"
                        label={'#checkbox-2, <span class="label1">defaultChecked</span>'}
                        labelTag="div"
                        labelTagClassName="d-inline"
                        defaultChecked
                      />
                      <Checkbox
                        checkboxClass="icheckbox_square-blue"
                        increaseArea="30%"
                        labelTag="div"
                        labelTagClassName="d-inline"
                        disabled
                      >
                        <span>#checkbox-3, </span>
                        <span className="label1">disabled</span>
                      </Checkbox>
                    </CheckboxGroup>
                  </Example>
                  <Example
                    srcPrepend={`import 'icheck/skins/all.css';
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';\n\n`}
                    title="Inline"
                  >
                    <CheckboxGroup
                      checkboxWrapClassName="form-check form-check-inline"
                      checkboxWrapTag="div"
                      className="d-flex align-items-center"
                    >
                      <Checkbox
                        checkboxClass="icheckbox_square-blue"
                        label="#checkbox-1"
                      />
                      <Checkbox
                        checkboxClass="icheckbox_square-blue"
                        label={'#checkbox-2, <span class="label1">defaultChecked</span>'}
                        labelTag="div"
                        labelTagClassName="d-inline"
                        defaultChecked
                      />
                      <Checkbox
                        checkboxClass="icheckbox_square-blue"
                        labelTag="div"
                        labelTagClassName="d-inline"
                        disabled
                      >
                        <span>#checkbox-3, </span>
                        <span className="label1">disabled</span>
                      </Checkbox>
                    </CheckboxGroup>
                  </Example>
                </TabPane>
                <TabPane tabId="properties">
                  <CheckboxProperties />
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

export default CheckboxPage;
