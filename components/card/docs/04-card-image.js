import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

/**
 * ## Card Image
 *
 * Using the `CardImg` component you can place a responsive image either on top of bottom of the card using the `top` or `bottom` props.
 */
export default function CardBodyExample() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
            <CardImg bottom src="https://place-hold.it/300x200" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
