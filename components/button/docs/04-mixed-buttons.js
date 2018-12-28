import React from "react";
import { Button } from "shards-react";

/**
 * ## Mixed Styles
 *
 * Similarly to Badges you can also mix both the `pill` and `outline` props to get a mixed "outline-pill" result.
 */
export default function OutlinePillButtonsExample() {
  return (
    <div className="example">
      <Button outline pill>
        Primary
      </Button>
      <Button outline pill theme="secondary">
        Secondary
      </Button>
      <Button outline pill theme="success">
        Success
      </Button>
      <Button outline pill theme="info">
        Info
      </Button>
      <Button outline pill theme="warning">
        Warning
      </Button>
      <Button outline pill theme="danger">
        Danger
      </Button>
      <Button outline pill theme="light">
        Light
      </Button>
      <Button outline pill theme="dark">
        Dark
      </Button>
    </div>
  );
}
