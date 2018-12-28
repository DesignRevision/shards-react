import React from "react";
import { Container, Row, Col } from "shards-react";

/**
 * ## Containers
 *
 * Containers are the most fundamental and required layout element for your application or website's layout. You can use the `Container` component for a fixed container, and apply the `fluid` prop for a fluid container.
 *
 * ## Rows
 *
 * The `Row` component must be placed inside a `Container` component and it's  used to define a row of columns. You can also apply the `form` prop onto a `Row` component to turn it into a `form-row` better suited for building form layouts that help you create a layout with more compact margins.
 *
 * ## Columns
 *
 * The `Col` component is used to represent a column and must be placed inside a `Row` component.
 */
export default class Example extends React.Component {
  render() {
    return (
      <Container className="dr-example-container">
        <Row>
          <Col sm="12" lg="6">
            sm=12 lg=6
          </Col>
          <Col sm="12" lg="6">
            sm=12 lg=6
          </Col>
        </Row>

        <Row>
          <Col sm="12" md="4" lg="3">
            sm=12 md=4 lg=3
          </Col>
          <Col sm="12" md="4" lg="6">
            sm=12 md=4 lg=6
          </Col>
          <Col sm="12" md="4" lg="3">
            sm=12 md=4 lg=3
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 8, order: 2, offset: 2 }}>
            .col-sm-8 .order-sm-2 .offset-sm-2
          </Col>
        </Row>
      </Container>
    );
  }
}
