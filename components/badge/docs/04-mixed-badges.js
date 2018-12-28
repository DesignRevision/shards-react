import React from "react";
import { Badge } from "shards-react";

/**
 * ## Mixed Effects
 *
 * You can also mix both the `pill` and `outline` props to get mixed results.
 */
export default function MixedBadgesExamples() {
  return (
    <div className="example">
      <Badge outline pill>
        Primary
      </Badge>
      <Badge outline pill theme="secondary">
        Secondary
      </Badge>
      <Badge outline pill theme="success">
        Success
      </Badge>
      <Badge outline pill theme="info">
        Info
      </Badge>
      <Badge outline pill theme="warning">
        Warning
      </Badge>
      <Badge outline pill theme="danger">
        Danger
      </Badge>
      <Badge outline pill theme="light">
        Light
      </Badge>
      <Badge outline pill theme="dark">
        Dark
      </Badge>
    </div>
  );
}
