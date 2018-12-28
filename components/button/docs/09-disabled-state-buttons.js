import React from "react";
import { Button } from "shards-react";

/**
 * ## Disabled State
 *
 * Similarly to the active state, the disabled state can also be controlled via the `disabled` prop.
 */
export default function DisabledButtonsExample() {
  return (
    <div className="example">
      <Button disabled theme="success">
        Success Disabled
      </Button>
      <Button disabled theme="danger">
        Danger Disabled
      </Button>
    </div>
  );
}
