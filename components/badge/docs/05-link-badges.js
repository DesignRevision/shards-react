import React from "react";
import { Badge } from "shards-react";

/**
 * ## Link Badges
 *
 * Using the `href` prop you can turn your badges into regular links.
 */
export default function LinkBadgesExamples() {
  return (
    <div className="example">
      <Badge href="#">Primary</Badge>
      <Badge href="#" theme="secondary">
        Secondary
      </Badge>
      <Badge href="#" theme="success">
        Success
      </Badge>
      <Badge href="#" theme="info">
        Info
      </Badge>
      <Badge href="#" theme="warning">
        Warning
      </Badge>
      <Badge href="#" theme="danger">
        Danger
      </Badge>
      <Badge href="#" theme="light">
        Light
      </Badge>
      <Badge href="#" theme="dark">
        Dark
      </Badge>
    </div>
  );
}
