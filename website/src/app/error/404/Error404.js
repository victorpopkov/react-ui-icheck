import './Error404.scss';
import { Button, Container } from 'reactstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { hot } from 'react-hot-loader';

const Error404 = () => (
  <main role="main" styleName="error">
    <Container className="text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <IndexLinkContainer to="/">
        <Button
          color="secondary"
          outline
        >
          <span>&larr; Back to Homepage</span>
        </Button>
      </IndexLinkContainer>
    </Container>
  </main>
);

export default hot(module)(Error404);
