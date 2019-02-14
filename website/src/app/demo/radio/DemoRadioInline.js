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
  onChange={(event, value) => {
    this.setState({
      radioValue: value,
    });
  }}
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
      <div class="icheckbox_square-blue" style="position: relative;">
        <input type="checkbox" value="" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <span>#checkbox-1</span>
    </label>
  </div>
  <div class="form-check form-check-inline">
    <label>
      <div class="icheckbox_square-blue checked" style="position: relative;">
        <input type="checkbox" value="" checked="" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: pointer;"></ins>
      </div>
      <div class="d-inline">
        #checkbox-2, <span class="label1">defaultChecked</span>
      </div>
    </label>
  </div>
  <div class="form-check form-check-inline">
    <label>
      <div class="icheckbox_square-blue disabled" style="position: relative;">
        <input disabled="" type="checkbox" value="" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: default;">
        <ins class="iCheck-helper" role="presentation" style="position: absolute; top: -30%; left: -30%; display: block; width: 160%; height: 160%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; cursor: default;"></ins>
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

export default DemoRadioInline;
