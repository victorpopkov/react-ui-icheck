import {
  Navbar as BaseNavbar,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React, { Component } from 'react';
import config from '@WebsiteConfig';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: false,
    };
  }

  toggleNavbar() {
    this.setState(state => ({
      collapsed: !state.collapsed,
    }));
  }

  render() {
    const { collapsed } = this.state;

    return (
      <BaseNavbar expand="md" light>
        <Container>
          <IndexLinkContainer to="/">
            <NavbarBrand>{config.package.name}</NavbarBrand>
          </IndexLinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={collapsed} timeout={0} navbar>
            <div className="d-block d-md-inline-block ml-auto text-center">
              <hr className="d-block d-sm-none" />
              <Nav navbar>
                <NavItem className="d-none d-md-inline-block">
                  <LinkContainer to="/checkbox">
                    <NavLink>Checkbox</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem className="d-none d-md-inline-block">
                  <LinkContainer to="/radio">
                    <NavLink>Radio</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <NavLink href={config.package.repository}>GitHub</NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="d-md-none d-sm-block ml-auto text-center">
              <hr />
              <h6>Getting Started</h6>
              <Nav navbar>
                <NavItem>
                  <IndexLinkContainer to="/">
                    <NavLink>Overview</NavLink>
                  </IndexLinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/checkbox">
                    <NavLink>Checkbox</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/radio">
                    <NavLink>Radio</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to="/installation">
                    <NavLink>Installation</NavLink>
                  </LinkContainer>
                </NavItem>
              </Nav>
              <hr />
              <h6>Skins</h6>
              <Nav navbar>
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
              <Nav navbar>
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
            </div>
          </Collapse>
        </Container>
      </BaseNavbar>
    );
  }
}

export default Navbar;
