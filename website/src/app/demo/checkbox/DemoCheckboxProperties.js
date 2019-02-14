import { Col, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';

const DemoCheckboxProperties = () => (
  <div>
    <h5 className="mb-4 mt-4">Properties</h5>
    <Row>
      <Col xs={12}>
        <h6 className="mb-4 mt-4">CheckboxGroup</h6>
        <pre>
          <code className="language-jsx">
            {`CheckboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  checkboxWrapClassName: PropTypes.string,
  checkboxWrapTag: PropTypes.string,
  className: PropTypes.string,
};`}
          </code>
        </pre>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h6 className="mb-4 mt-4">Checkbox</h6>
        <pre>
          <code className="language-jsx">
            {`Checkbox.propTypes = {
  activeClass: PropTypes.string,        // default: 'active'
  aria: PropTypes.bool,                 // default: false
  checkboxClass: PropTypes.string,      // default: 'icheckbox'
  checked: PropTypes.bool,              // default: false
  checkedClass: PropTypes.string,       // default: 'checked'
  children: PropTypes.node,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,       // default: false
  determinateClass: PropTypes.string,
  disabled: PropTypes.bool,             // default: false
  disabledClass: PropTypes.string,      // default: 'disabled'
  focusClass: PropTypes.string,         // default: 'focus'
  hoverClass: PropTypes.string,         // default: 'hover'
  id: PropTypes.string,
  increaseArea: PropTypes.string,       // default: ''
  indeterminate: PropTypes.bool,        // default: true
  indeterminateClass: PropTypes.string, // default: 'indeterminate'
  inheritClass: PropTypes.bool,         // default: false
  inheritID: PropTypes.bool,            // default: false
  insert: PropTypes.node,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  labelHover: PropTypes.bool,           // default: true
  labelHoverClass: PropTypes.string,    // default: 'hover'
  labelTag: PropTypes.string,           // default: 'span'
  labelTagClassName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,              // default: ''
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
};`}
          </code>
        </pre>
      </Col>
    </Row>
  </div>
);

export default hot(module)(DemoCheckboxProperties);
