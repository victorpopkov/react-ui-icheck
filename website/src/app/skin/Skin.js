import './Skin.scss';
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from 'react-icheck'; // eslint-disable-line import/no-unresolved
import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Sidebar from '../common/sidebar/Sidebar'; // eslint-disable-line sort-imports
import SkinColorSchemes from './SkinColorSchemes';

@hot(module)
class Skin extends Component {
  static propTypes = {
    color: PropTypes.string,
    colorSchemes: PropTypes.bool,
    skin: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    color: null,
    colorSchemes: false,
    skin: null,
    title: null,
  };

  constructor(props) {
    super(props);

    this.handleColor = this.handleColor.bind(this);

    this.state = {
      skin: props.skin,
      color: props.color,
      radioValue: '2',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { color: prevColor, skin: prevSkin } = this.props;
    const { color, skin } = nextProps;

    if (color !== prevColor) {
      this.setState({
        color,
      });
    }

    if (skin !== prevSkin) {
      this.setState({
        skin,
      });
    }
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  getCheckboxClass() {
    const { skin, color } = this.state;
    if (color) {
      return `icheckbox_${skin}-${color}`;
    }
    return `icheckbox_${skin}`;
  }

  getRadioClass() {
    const { skin, color } = this.state;
    if (color) {
      return `iradio_${skin}-${color}`;
    }
    return `iradio_${skin}`;
  }

  handleColor(color) {
    this.setState({ color });
  }

  render() {
    const { colorSchemes, skin, title } = this.props;
    const { color, radioValue } = this.state;

    return (
      <Container>
        <Row>
          <Col md={9}>
            <h2 className="heading">{title}</h2>
            <Col className={`skin-${skin} mt-4`} md={11}>
              <Row>
                <Col className="mb-2 mb-lg-0" lg={6} md={12}>
                  <CheckboxGroup
                    checkboxWrapClassName="form-check p-0"
                    checkboxWrapTag="div"
                  >
                    <Checkbox
                      checkboxClass={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox"
                    />
                    <Checkbox
                      checkboxClass={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox, defaultChecked"
                      defaultChecked
                    />
                    <Checkbox
                      checkboxClass={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox, disabled"
                      disabled
                    />
                    <Checkbox
                      checkboxClass={this.getCheckboxClass()}
                      increaseArea="20%"
                      label="Checkbox, defaultChecked, disabled"
                      defaultChecked
                      disabled
                    />
                  </CheckboxGroup>
                </Col>
                <Col className="mt-2 mt-lg-0" lg={6} md={12}>
                  <RadioGroup
                    name="example"
                    radioWrapClassName="form-check p-0"
                    radioWrapTag="div"
                    value={radioValue}
                    onChange={(event, value) => {
                      this.setState({
                        radioValue: value,
                      });
                    }}
                  >
                    <Radio
                      increaseArea="20%"
                      label="Radio"
                      radioClass={this.getRadioClass()}
                      value="1"
                    />
                    <Radio
                      increaseArea="20%"
                      label="Radio, defaultChecked"
                      radioClass={this.getRadioClass()}
                      value="2"
                      defaultChecked
                    />
                    <Radio
                      increaseArea="20%"
                      label="Radio, disabled"
                      radioClass={this.getRadioClass()}
                      value="3"
                      disabled
                    />
                    <Radio
                      increaseArea="20%"
                      label="Radio, defaultChecked, disabled"
                      radioClass={this.getRadioClass()}
                      value="4"
                      defaultChecked
                      disabled
                    />
                  </RadioGroup>
                </Col>
              </Row>
            </Col>
            {colorSchemes && (
              <Row>
                <Col className="pt-4" md={11}>
                  <SkinColorSchemes color={color} onChange={this.handleColor} />
                </Col>
              </Row>
            )}
            <Row>
              <Col className="pt-4" md={11}>
                <pre className="m-0">
                  <code className="language-jsx">
                    {`import 'icheck/skins/all.css';
import { Checkbox, Radio } from 'react-icheck';

<Checkbox checkboxClass="${this.getCheckboxClass()}" />
<Radio radioClass="${this.getRadioClass()}" />`}
                  </code>
                </pre>
              </Col>
            </Row>
          </Col>
          <Sidebar />
        </Row>
      </Container>
    );
  }
}

export default Skin;
