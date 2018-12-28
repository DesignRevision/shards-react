import React from "react";
import { Container, Row, Col } from "shards-react";

/**
 * ## Basic Example
 */
export default class Example extends React.Component {
  render() {
    return (
      <Container className="dr-example-container">
        <Row>
          <Col>1 / 12</Col>
          <Col>2 / 12</Col>
          <Col>3 / 12</Col>
          <Col>4 / 12</Col>
          <Col>5 / 12</Col>
          <Col>6 / 12</Col>
          <Col>7 / 12</Col>
          <Col>8 / 12</Col>
          <Col>9 / 12</Col>
          <Col>10 / 12</Col>
          <Col>11 / 12</Col>
          <Col>12 / 12</Col>
        </Row>

        <Row>
          <Col>1 / 6</Col>
          <Col>2 / 6</Col>
          <Col>3 / 6</Col>
          <Col>4 / 6</Col>
          <Col>5 / 6</Col>
          <Col>6 / 6</Col>
        </Row>

        <Row>
          <Col>1 / 3</Col>
          <Col>2 / 3</Col>
          <Col>3 / 3</Col>
        </Row>

        <Row>
          <Col>1 / 2</Col>
          <Col>2 / 2</Col>
        </Row>

        <Row>
          <Col>1 / 1</Col>
        </Row>
      </Container>
    );
  }
}
