import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

/**
 * ## Card Body Title and Subtitle
 *
 * You can display a title and subtitle for your card using the `CardTitle` and `CardSubtitle` components.
 */
export default function CardBodyTitleSubtitleExample() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
  );
}
