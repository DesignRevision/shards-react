import React from "react";
import { Badge } from "shards-react";

/**
 * ## Outline Badges
 *
 * The `outline` prop removes the background color and applies a thin border that make your badges to look outlined.
 */
export default function OutlineBadgesExamples() {
  return (
    <div className="example">
      <Badge outline>Primary</Badge>
      <Badge outline theme="secondary">
        Secondary
      </Badge>
      <Badge outline theme="success">
        Success
      </Badge>
      <Badge outline theme="info">
        Info
      </Badge>
      <Badge outline theme="warning">
        Warning
      </Badge>
      <Badge outline theme="danger">
        Danger
      </Badge>
      <Badge outline theme="light">
        Light
      </Badge>
      <Badge outline theme="dark">
        Dark
      </Badge>
    </div>
  );
}
