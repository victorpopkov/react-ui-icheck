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
import { Radio, RadioGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
import React, { Component } from 'react';
import Prism from 'prismjs';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import { Example, Jumbotron, Sidebar } from '../common'; // eslint-disable-line sort-imports
import RadioProperties from './RadioProperties';

@hot(module)
class RadioPage extends Component {
  constructor(props) {
    super(props);

    this.toggleActiveTab = this.toggleActiveTab.bind(this);

    this.state = {
      activeTab: 'examples',
      radioValue: '2',
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  toggleActiveTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { activeTab, radioValue } = this.state;

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
                    srcFunctionValue="(event, value) => this.setState({ radioValue: value })"
                    srcPrepend={`import 'icheck/skins/all.css';
import { Radio, RadioGroup } from 'react-ui-icheck';

this.state = {
  radioValue: '2',
};\n\n`}
                    title="Default"
                  >
                    <RadioGroup
                      name="radio"
                      radioWrapClassName="form-check"
                      radioWrapTag="div"
                      value={radioValue}
                      onChange={(event, value) => this.setState({ radioValue: value })}
                    >
                      <Radio
                        increaseArea="30%"
                        label="#radio-1"
                        radioClass="iradio_square-blue"
                        value="1"
                      />
                      <Radio
                        increaseArea="30%"
                        label="#radio-2"
                        labelTag="div"
                        labelTagClassName="d-inline"
                        radioClass="iradio_square-blue"
                        value="2"
                      />
                      <Radio
                        increaseArea="30%"
                        labelTag="div"
                        labelTagClassName="d-inline"
                        radioClass="iradio_square-blue"
                        value="3"
                        disabled
                      >
                        <span>#radio-3, </span>
                        <span className="label1">disabled</span>
                      </Radio>
                    </RadioGroup>
                  </Example>
                  <Example
                    srcFunctionValue="(event, value) => this.setState({ radioValue: value })"
                    srcPrepend={`import 'icheck/skins/all.css';
import { Radio, RadioGroup } from 'react-ui-icheck';

this.state = {
  radioValue: '2',
};\n\n`}
                    title="Inline"
                  >
                    <RadioGroup
                      className="d-flex align-items-center"
                      name="radio"
                      radioWrapClassName="form-check form-check-inline"
                      radioWrapTag="div"
                      value={radioValue}
                      onChange={(event, value) => this.setState({ radioValue: value })}
                    >
                      <Radio
                        label="#radio-1"
                        radioClass="iradio_square-blue"
                        value="1"
                      />
                      <Radio
                        label="#radio-2"
                        labelTag="div"
                        labelTagClassName="d-inline"
                        radioClass="iradio_square-blue"
                        value="2"
                      />
                      <Radio
                        labelTag="div"
                        labelTagClassName="d-inline"
                        radioClass="iradio_square-blue"
                        value="3"
                        disabled
                      >
                        <span>#radio-3, </span>
                        <span className="label1">disabled</span>
                      </Radio>
                    </RadioGroup>
                  </Example>
                </TabPane>
                <TabPane tabId="properties">
                  <RadioProperties />
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

export default RadioPage;
