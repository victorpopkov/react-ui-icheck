import { Col, Container, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Jumbotron, Sidebar } from '../common'; // eslint-disable-line sort-imports

const Home = () => (
  <main className="home" role="main">
    <Jumbotron />
    <Container>
      <Row>
        <Col md={9}>
          <h2 className="heading">Overview</h2>
          <p className="badges">
            <a href="https://david-dm.org/victorpopkov/react-ui-icheck" rel="noopener noreferrer" target="_blank">
              <img alt="David" src="https://img.shields.io/david/victorpopkov/react-ui-icheck.svg" />
            </a>
            {' '}
            <a href="https://david-dm.org/victorpopkov/react-ui-icheck?type=dev" rel="noopener noreferrer" target="_blank">
              <img alt="David" src="https://img.shields.io/david/dev/victorpopkov/react-ui-icheck.svg" />
            </a>
            {' '}
            <a href="https://david-dm.org/victorpopkov/react-ui-icheck?type=peer" rel="noopener noreferrer" target="_blank">
              <img alt="David" src="https://img.shields.io/david/peer/victorpopkov/react-ui-icheck.svg" />
            </a>
            {' '}
            <a href="https://travis-ci.org/victorpopkov/react-ui-icheck" rel="noopener noreferrer" target="_blank">
              <img alt="Travis (.org)" src="https://img.shields.io/travis/victorpopkov/react-ui-icheck.svg" />
            </a>
            {' '}
            <a href="https://www.npmjs.com/package/react-ui-icheck" rel="noopener noreferrer" target="_blank">
              <img alt="npm" src="https://img.shields.io/npm/v/react-ui-icheck.svg" />
            </a>
          </p>
          <p>
            This library was originally intended to be a fork of the
            {' '}
            <a href="https://github.com/luqin/react-icheck" rel="noopener noreferrer" target="_blank">
              react-icheck
            </a>
            {' '}
            library created by
            {' '}
            <a href="https://github.com/luqin" rel="noopener noreferrer" target="_blank">luqin</a>
            {' '}
            which
            {' doesn\'t '}
            seem to be actively maintained any more
            {' '}
            <i>
              [at the moment of writing this, the last
              {' '}
              <a href="https://github.com/luqin/react-icheck" rel="noopener noreferrer" target="_blank">
                react-icheck
              </a>
              {' '}
              release (
              <a href="https://github.com/luqin/react-icheck/releases/tag/v0.3.6" rel="noopener noreferrer" target="_blank">
                v0.3.6
              </a>
              ) was 2 years ago]
            </i>
            .
          </p>
          <p>
            After diving into the original code it was more convenient to create a new separate
            one as a drop-in replacement with some additional features.
          </p>
          <p>
            Below you can find the list of the main differences from the original
            {' '}
            <a href="https://github.com/luqin/react-icheck" rel="noopener noreferrer" target="_blank">
              react-icheck
            </a>
            {' '}
            library.
          </p>
          <h3 className="mb-4">Differences</h3>
          <ul>
            <li>
              Completely refactored and fixed/improved the existing code:
              <ul className="mb-2 mt-2">
                <li>
                  added
                  {' '}
                  <pre className="d-inline">onBlur</pre>
                  {' and '}
                  <pre className="d-inline">onFocus</pre>
                  {' '}
                  label events to accompany
                  {' '}
                  <pre className="d-inline">onMouseOut</pre>
                  {' and '}
                  <pre className="d-inline">onMouseOver</pre>
                  {' '}
                  for accessibility
                </li>
                <li>
                  moved all corresponding properties from the
                  {' '}
                  <pre className="d-inline">EnchantedSwitch</pre>
                  {' '}
                  to both
                  {' '}
                  <pre className="d-inline">Checkbox</pre>
                  {' and '}
                  <pre className="d-inline">Radio</pre>
                  {' '}
                  components and removed unused ones
                </li>
                <li>
                  removed
                  {' '}
                  <pre className="d-inline">EnchantedSwitch</pre>
                  {' '}
                  in favour of
                  {' '}
                  <pre className="d-inline">Input</pre>
                  {' and '}
                  <pre className="d-inline">Label</pre>
                  {' '}
                  components
                </li>
                <li>
                  removed
                  {' '}
                  <pre className="d-inline">refs</pre>
                  {' '}
                  usage to follow the
                  {' "'}
                  <a href="https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs" rel="noopener noreferrer" target="_blank">
                    Don’t Overuse Refs
                  </a>
                  {'" '}
                  guide
                </li>
              </ul>
            </li>
            <li>
              Introduced
              {' '}
              <pre className="d-inline">CheckboxGroup</pre>
              {' '}
              similar to the
              {' '}
              <pre className="d-inline">RadioGroup</pre>
              .
            </li>
            <li>
              Introduced
              {' '}
              <pre className="d-inline">checkboxWrapClassName</pre>
              {' '}
              and
              {' '}
              <pre className="d-inline">checkboxWrapTag</pre>
              {' '}
              properties for
              {' '}
              <pre className="d-inline">RadioGroup</pre>
              {' '}
              to control the wrapping behaviour of the radio elements.
            </li>
            <li>
              Introduced
              {' '}
              <pre className="d-inline">labelTag</pre>
              {' '}
              and
              {' '}
              <pre className="d-inline">labelTagClassName</pre>
              {' '}
              properties for both
              {' '}
              <pre className="d-inline">Checkbox</pre>
              {' '}
              and
              {' '}
              <pre className="d-inline">Radio</pre>
              {' '}
              components to control the rendering of the label content.
            </li>
            <li>
              Labels for
              {' '}
              <pre className="d-inline">Checkbox</pre>
              {' '}
              and
              {' '}
              <pre className="d-inline">Radio</pre>
              {' '}
              can be passed as children alongside with the original
              {' '}
              <pre className="d-inline">label</pre>
              {' '}
              property.
            </li>
          </ul>
        </Col>
        <Sidebar />
      </Row>
    </Container>
  </main>
);

export default hot(module)(Home);
