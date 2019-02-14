import { Checkbox, CheckboxGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
import {
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
class DemoCheckboxInline extends Component {
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
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <h5 className="mb-4 mt-4">Inline</h5>
        <Form className="demo-checkbox">
          <CheckboxGroup
            checkboxWrapClassName="form-check form-check-inline"
            checkboxWrapTag="div"
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
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';

<CheckboxGroup
  checkboxWrapClassName="form-check form-check-inline"
  checkboxWrapTag="div"
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
</CheckboxGroup>`}
              </code>
            </pre>
          </TabPane>
          <TabPane tabId="rendered">
            <pre>
              <code className="language-html">
                {`<div>
  <div class="form-check form-check-inline">
    <label>
      <div class="icheckbox_square-blue indeterminate">
        <input type="checkbox" value="" style="opacity: 0; position: absolute;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <span>#checkbox-1</span>
    </label>
  </div>
  <div class="form-check form-check-inline">
    <label>
      <div class="icheckbox_square-blue indeterminate checked">
        <input type="checkbox" value="" checked="" style="opacity: 0; position: absolute;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <div class="d-inline">#checkbox-2, <span class="label1">defaultChecked</span></div>
    </label>
  </div>
  <div class="form-check form-check-inline">
    <label>
      <div class="icheckbox_square-blue indeterminate disabled">
        <input disabled="" type="checkbox" value="" style="opacity: 0; position: absolute;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: default;"></ins>
      </div>
      <div class="d-inline">
        <span>#checkbox-3, </span>
        <span class="label1">disabled</span>
      </div>
    </label>
  </div>
</div>`}
              </code>
            </pre>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default DemoCheckboxInline;
