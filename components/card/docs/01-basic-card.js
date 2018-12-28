import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

/**
 * ## Basic Example
 *
 * By default, cards fill in the full width of their parent element, however this can be customized via styling. Cards also support a large variety of content including images, links, text and more. Make sure to check out all the examples below.
 */
export default function BasicCardExample() {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
  );
}
