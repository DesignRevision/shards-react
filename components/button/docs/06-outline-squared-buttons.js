import React from "react";
import { Button } from "shards-react";

/**
 * ## Mixed Outline-Squared Style
 *
 * Mixing the `outline` and `squared` prop is also possible and it will render an outlined and squared button.
 */
export default function OutlineSquaredPillButtonsExample() {
  return (
    <div className="example">
      <Button outline squared>
        Primary
      </Button>
      <Button outline squared theme="secondary">
        Secondary
      </Button>
      <Button outline squared theme="success">
        Success
      </Button>
      <Button outline squared theme="info">
        Info
      </Button>
      <Button outline squared theme="warning">
        Warning
      </Button>
      <Button outline squared theme="danger">
        Danger
      </Button>
      <Button outline squared theme="light">
        Light
      </Button>
      <Button outline squared theme="dark">
        Dark
      </Button>
    </div>
  );
}
