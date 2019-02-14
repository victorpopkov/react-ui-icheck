import {
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const Sidebar = () => (
  <Col className="d-none d-md-block" md={3}>
    <h5 className="pb-2">Getting Started</h5>
    <Nav vertical>
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
);

export default Sidebar;
