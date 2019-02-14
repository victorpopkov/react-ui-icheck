import {
  Form,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Radio, RadioGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

@hot(module)
class DemoRadioInline extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: 'source',
      radioValue: '2',
    };
  }

  toggleTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { activeTab, radioValue } = this.state;

    return (
      <div>
        <h5 className="mb-4 mt-4">Inline</h5>
        <Form className="demo-radio">
          <RadioGroup
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
import { Radio, RadioGroup } from 'react-ui-icheck';

this.state = {
  radioValue: '2',
};

<RadioGroup
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
    <span>#radio-3,</span>
    <span class="label1">disabled</span>
  </Radio>
</RadioGroup>`}
              </code>
            </pre>
          </TabPane>
          <TabPane tabId="rendered">
            <pre>
              <code className="language-html">
                {`<div>
  <div class="form-check form-check-inline">
    <label>
      <div class="iradio_square-blue indeterminate">
        <input type="radio" value="1" style="opacity: 0; position: absolute;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <span>#radio-1</span>
    </label>
  </div>
  <div class="form-check form-check-inline">
    <label>
      <div class="iradio_square-blue indeterminate checked">
        <input type="radio" value="2" checked="" style="opacity: 0; position: absolute;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <div class="d-inline">#radio-2</div>
    </label>
  </div>
  <div class="form-check form-check-inline">
    <label>
      <div class="iradio_square-blue indeterminate disabled">
        <input disabled="" type="radio" value="3" style="opacity: 0; position: absolute;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: default;"></ins>
      </div>
      <div class="d-inline">
        <span>#radio-3, </span>
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

export default DemoRadioInline;
