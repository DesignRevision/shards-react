import React from "react";
import { Badge } from "shards-react";

/**
 * ## Contextual Variations
 *
 * The `theme` prop allows you to easily change the appearance of your badge using the main theme colors: `primary, secondary, success, danger, warning, info, light` and `dark`.
 */
export default function ContextualBadgesExamples() {
  return (
    <div className="example">
      <Badge>Primary</Badge>
      <Badge theme="secondary">Secondary</Badge>
      <Badge theme="success">Success</Badge>
      <Badge theme="info">Info</Badge>
      <Badge theme="warning">Warning</Badge>
      <Badge theme="danger">Danger</Badge>
      <Badge theme="light">Light</Badge>
      <Badge theme="dark">Dark</Badge>
    </div>
  );
}
