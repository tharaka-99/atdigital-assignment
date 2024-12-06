import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BodyContent.css";
import image_01 from "../../assets/image_01.png";
import image_02 from "../../assets/image_02.png";

export default function BodyContent() {
  return (
    <div>
      <Container className="service-container">
        <Row className="justify-content-center align-items-center">
          <Col
            lg={4}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={image_01} alt="Logo" />
          </Col>
          <Col lg={6} sm={12}>
            <div className="service-title">Web & Mobile App Development</div>
            <div className="service-description">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </div>

            <button className="learn-more-button">LEARN MORE</button>
          </Col>
        </Row>
      </Container>
      <Container className="service-container">
        <Row className="justify-content-center align-items-center">
          <Col lg={{ span: 6, order: 1 }} sm={{ span: 12, order: 2 }}>
            <div className="service-title">Digital Strategy Consulting</div>
            <div className="service-description">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </div>
            <div>
              <button className="learn-more-button">LEARN MORE</button>
            </div>
          </Col>
          <Col
            lg={{ span: 4, order: 2 }}
            sm={{ span: 12, order: 1 }}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={image_02} alt="Logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
