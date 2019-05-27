import { Col, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';

const RadioProperties = () => (
  <div>
    <h5 className="mb-4 mt-4">Properties</h5>
    <Row>
      <Col xs={12}>
        <h6 className="mb-4 mt-4">RadioGroup</h6>
        <pre>
          <code className="language-jsx">
            {`RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  radioWrapClassName: PropTypes.string,
  radioWrapTag: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};`}
          </code>
        </pre>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h6 className="mb-4 mt-4">Radio</h6>
        <pre>
          <code className="language-jsx">
            {`Radio.propTypes = {
  activeClass: PropTypes.string,        // default: 'active'
  aria: PropTypes.bool,                 // default: false
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
  radioClass: PropTypes.string,         // default: 'iradio'
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

export default hot(module)(RadioProperties);
