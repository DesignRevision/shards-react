import React from "react";
import { Button } from "shards-react";

/**
 * ## Squared Style
 *
 * Using the `squared` prop you can style your buttons to look, well, squared.
 *
 * > **Note**: The `pill` prop has priority over the `squared` prop.
 */
export default function SquaredButtonsExample() {
  return (
    <div className="example">
      <Button squared>Primary</Button>
      <Button squared theme="secondary">
        Secondary
      </Button>
      <Button squared theme="success">
        Success
      </Button>
      <Button squared theme="info">
        Info
      </Button>
      <Button squared theme="warning">
        Warning
      </Button>
      <Button squared theme="danger">
        Danger
      </Button>
      <Button squared theme="light">
        Light
      </Button>
      <Button squared theme="dark">
        Dark
      </Button>
    </div>
  );
}
