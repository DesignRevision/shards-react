import React from "react";
import { Button } from "shards-react";

/**
 * ## Outline Styled Buttons
 *
 * You can use the `outline` prop to remove the background color and apply a thin border that make your buttons look outlined.
 */
export default function OutlineButtonsExample() {
  return (
    <div className="example">
      <Button outline>Primary</Button>
      <Button outline theme="secondary">
        Secondary
      </Button>
      <Button outline theme="success">
        Success
      </Button>
      <Button outline theme="info">
        Info
      </Button>
      <Button outline theme="warning">
        Warning
      </Button>
      <Button outline theme="danger">
        Danger
      </Button>
      <Button outline theme="light">
        Light
      </Button>
      <Button outline theme="dark">
        Dark
      </Button>
    </div>
  );
}
