import { Checkbox, CheckboxGroup } from 'react-ui-icheck'; // eslint-disable-line import/no-unresolved
import { Form } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import Source from '../../common/source/Source'; // eslint-disable-line sort-imports

const DemoCheckboxInline = () => {
  const example = (
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
  );

  return (
    <div>
      <h5 className="mb-4 mt-4">Inline</h5>
      <Form className="demo-checkbox">
        {example}
      </Form>
      <Source
        srcPrepend={`import 'icheck/skins/all.css';
import { Checkbox, CheckboxGroup } from 'react-ui-icheck';\n\n`}
      >
        {example}
      </Source>
    </div>
  );
};

export default hot(module)(DemoCheckboxInline);
