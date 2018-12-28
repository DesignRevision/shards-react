import React from "react";
import { ListGroup, ListGroupItem } from "shards-react";

/**
 * ## Basic Example
 *
 * You can create list groups using the `ListGroup` component with the `ListGroupItem` sub-component.
 */
export default function ListGroupDemo() {
  return (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  );
}
