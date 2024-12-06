import React from "react";
import { Container, Row, Accordion } from "react-bootstrap";

export default function FaqSection() {
  return (
    <div>
      <Container className="faq-section p-5">
        <Row>
          <div sm={12}>
            <p
              style={{
                fontSize: 30,
                fontWeight: 700,
                textAlign: "center",
                color: "#6B3CC9",
              }}
            >
              Frequently Asked Questions
            </p>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p
                    style={{ color: "#6B3CC9", fontSize: 20, fontWeight: 500 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu
                    libero?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p
                    style={{ color: "#6B3CC9", fontSize: 18, fontWeight: 400 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                    suscipit id ipsum. Elementum ultrices nulla faucibus odio
                    est sed aliquam. Sapien massa morbi risus sagittis tortor
                    integer.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header style={{ color: "#6B3CC9" }}>
                  <p
                    style={{ color: "#6B3CC9", fontSize: 20, fontWeight: 500 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu
                    libero?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p
                    style={{ color: "#6B3CC9", fontSize: 18, fontWeight: 400 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                    suscipit id ipsum. Elementum ultrices nulla faucibus odio
                    est sed aliquam. Sapien massa morbi risus sagittis tortor
                    integer.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header style={{ color: "#6B3CC9" }}>
                  <p
                    style={{ color: "#6B3CC9", fontSize: 20, fontWeight: 500 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu
                    libero?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p
                    style={{ color: "#6B3CC9", fontSize: 18, fontWeight: 400 }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                    suscipit id ipsum. Elementum ultrices nulla faucibus odio
                    est sed aliquam. Sapien massa morbi risus sagittis tortor
                    integer.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Row>
      </Container>
    </div>
  );
}
