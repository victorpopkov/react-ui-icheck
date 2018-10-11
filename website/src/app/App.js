import 'bootstrap/dist/css/bootstrap.min.css';
import 'icheck/skins/all.css';
import './style.scss';
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Footer from './common/footer/Footer'; // eslint-disable-line sort-imports
import Navbar from './common/navbar/Navbar';
import config from '@WebsiteConfig';

@hot(module)
class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <Navbar />
        <Container>
          <Row className="justify-content-center">
            <Col className="pb-5 pt-5 text-center" lg={6} md={8} xl={4} xs={12}>
              <h1>{config.package.name}</h1>
              <h6 className="mb-4">
                Latest version:
                {' '}
                {config.package.version}
              </h6>
              <pre className="text-center">
                <code className="language-bash">
                  npm install
                  {' '}
                  {config.package.name}
                  {' '}
                  --save
                </code>
              </pre>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              {children}
            </Col>
            <Col className="d-none d-md-block" md={3}>
              <h5 className="pb-2">Getting Started</h5>
              <Nav vertical>
                <NavItem>
                  <IndexLinkContainer to="/">
                    <NavLink>Overview</NavLink>
                  </IndexLinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/demo">
                    <NavLink>Demo</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/installation">
                    <NavLink>Installation</NavLink>
                  </LinkContainer>
                </NavItem>
              </Nav>
              <hr className="mb-4" />
              <h5 className="pb-2">Skins</h5>
              <Nav vertical>
                <NavItem>
                  <LinkContainer to="/skin/flat">
                    <NavLink>Flat</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/skin/line">
                    <NavLink>Line</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/skin/minimal">
                    <NavLink>Minimal</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/skin/square">
                    <NavLink>Square</NavLink>
                  </LinkContainer>
                </NavItem>
              </Nav>
              <hr />
              <Nav vertical>
                <NavItem>
                  <LinkContainer to="/skin/futurico">
                    <NavLink>Futurico</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/skin/polaris">
                    <NavLink>Polaris</NavLink>
                  </LinkContainer>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
