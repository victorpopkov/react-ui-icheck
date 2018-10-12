import './Jumbotron.scss';
import {
  Jumbotron as BaseJumbotron,
  Col,
  Container,
  Row,
} from 'reactstrap';
import React from 'react';
import config from '@WebsiteConfig';

const Jumbotron = () => (
  <BaseJumbotron className="m-0 pb-5 pt-5" styleName="jumbotron" tag="section">
    <Container>
      <h1>{config.package.name}</h1>
      <h6 className="mb-4">
        Latest version:
        {' '}
        {config.package.version}
      </h6>
      <Row className="justify-content-center">
        <Col lg={6} md={8} xl={4} xs={12}>
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
    </Container>
  </BaseJumbotron>
);

export default Jumbotron;
