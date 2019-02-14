import { Radio, RadioGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { hot } from 'react-hot-loader';
import Source from '../../common/source/Source'; // eslint-disable-line sort-imports

@hot(module)
class DemoRadioDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: '2',
    };
  }

  render() {
    const { radioValue } = this.state;

    const example = (
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
    );

    return (
      <div>
        <h5 className="mb-4 mt-4">Default</h5>
        <Form className="demo-radio">
          {example}
        </Form>
        <Source
          srcFunctionValue="(event, value) => this.setState({ radioValue: value })"
          srcPrepend={`import 'icheck/skins/all.css';
import { Radio, RadioGroup } from 'react-ui-icheck';

this.state = {
  radioValue: '2',
};\n\n`}
        >
          {example}
        </Source>
      </div>
    );
  }
}

export default DemoRadioDefault;
