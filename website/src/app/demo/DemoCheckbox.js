import { Checkbox, CheckboxGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
import {
  Col,
  Form,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

@hot(module)
class DemoCheckbox extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: 'source',
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
      <Col md={12}>
        <h4 className="mt-4">Checkbox</h4>
        <h5 className="mb-4 mt-4">Demo</h5>
        <Form className="demo-checkbox">
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
        </Form>
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
                {`import 'icheck/skins/all.css';
import { Checkbox } from 'react-ui-icheck';

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
    <span>#checkbox-3,</span>
    <span className="label1">disabled</span>
  </Checkbox>
</CheckboxGroup>`}
              </code>
            </pre>
          </TabPane>
          <TabPane tabId="rendered">
            <pre>
              <code className="language-html">
                {`<div>
  <div className="form-check">
    <label>
      <div className="icheckbox_square-blue" style="position: relative;">
        <input type="checkbox" value="" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;">
        <ins className="iCheck-helper" role="presentation" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <span>#checkbox-1</span>
    </label>
  </div>
  <div className="form-check">
    <label>
      <div className="icheckbox_square-blue checked" style="position: relative;">
        <input type="checkbox" value="" checked="" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;">
        <ins className="iCheck-helper" role="presentation" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <div className="d-inline">
        #checkbox-2, <span className="label1">defaultChecked</span>
      </div>
    </label>
  </div>
  <div className="form-check">
    <label>
      <div className="icheckbox_square-blue disabled" style="position: relative;">
        <input disabled="" type="checkbox" value="" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: default;">
        <ins className="iCheck-helper" role="presentation" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: default;"></ins>
      </div>
      <div className="d-inline">
        <span>#checkbox-3,</span>
        <span className="label1">disabled</span>
      </div>
    </label>
  </div>
</div>`}
              </code>
            </pre>
          </TabPane>
        </TabContent>
      </Col>
    );
  }
}

export default DemoCheckbox;
