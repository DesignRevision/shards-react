import React from "react";
import { Button } from "shards-react";

/**
 * ## Pill Shaped Buttons
 *
 * The `pill` prop applies a larger border radius that make your buttons look more rounded and pill-like.
 */
export default function PillButtonsExample() {
  return (
    <div className="example">
      <Button pill>Primary</Button>
      <Button pill theme="secondary">
        Secondary
      </Button>
      <Button pill theme="success">
        Success
      </Button>
      <Button pill theme="info">
        Info
      </Button>
      <Button pill theme="warning">
        Warning
      </Button>
      <Button pill theme="danger">
        Danger
      </Button>
      <Button pill theme="light">
        Light
      </Button>
      <Button pill theme="dark">
        Dark
      </Button>
    </div>
  );
}
