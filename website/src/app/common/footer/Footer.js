import './Footer.scss';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import React from 'react';
import config from '@WebsiteConfig';

const Footer = () => (
  <footer className="footer" styleName="footer">
    <Container>
      <Row>
        <Col md={12} styleName="content">
          <ul>
            <li><a href={config.package.repository}>View on GitHub</a></li>
          </ul>
          <div styleName="buttons">
            <iframe
              frameBorder="0"
              height="20px"
              scrolling="0"
              src={`https://ghbtns.com/github-btn.html?user=victorpopkov&repo=${config.package.name}&type=star&count=true`}
              title="GitHub Stars"
              width="80px"
            />
            <iframe
              frameBorder="0"
              height="20px"
              scrolling="0"
              src={`https://ghbtns.com/github-btn.html?user=victorpopkov&repo=${config.package.name}&type=watch&count=true&v=2`}
              title="GitHub Watchers"
              width="90px"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
