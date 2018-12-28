import React from "react";
import { Badge } from "shards-react";

/**
 * ## Pill-Shaped Badges
 *
 * The pill `prop` applies a larger border radius that make your badges to look rounded.
 */
export default function PillBadgesExamples() {
  return (
    <div className="example">
      <Badge pill>Primary</Badge>
      <Badge pill theme="secondary">
        Secondary
      </Badge>
      <Badge pill theme="success">
        Success
      </Badge>
      <Badge pill theme="info">
        Info
      </Badge>
      <Badge pill theme="warning">
        Warning
      </Badge>
      <Badge pill theme="danger">
        Danger
      </Badge>
      <Badge pill theme="light">
        Light
      </Badge>
      <Badge pill theme="dark">
        Dark
      </Badge>
    </div>
  );
}
