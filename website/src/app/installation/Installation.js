import { Col, Row } from 'reactstrap';
import React from 'react';
import { hot } from 'react-hot-loader';

const Installation = () => (
  <div className="installation">
    <h2 className="mb-4">Installation</h2>
    <Row>
      <Col xs={12}>
        <p>
          You can install this library as any other
          {' '}
          <a href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">npm</a>
          {' '}
          package.
        </p>
        <p>
          If you are planning to use your own custom skin, then only the package of this library
          is needed:
        </p>
        <pre className="mb-3">
          <code className="language-bash">
            {`# using npm
npm install react-ui-icheck --save

# using Yarn
yarn add react-ui-icheck`}
          </code>
        </pre>
        <p>
          If you are planning to use the original
          {' '}
          <a href="https://github.com/fronteed/icheck" rel="noopener noreferrer" target="_blank">iCheck</a>
          {' '}
          skins, then you should install both packages:
        </p>
        <pre>
          <code className="language-bash">
            {`# using npm
npm install react-ui-icheck icheck --save

# using Yarn
yarn add react-ui-icheck icheck`}
          </code>
        </pre>
      </Col>
    </Row>
  </div>
);

export default hot(module)(Installation);
