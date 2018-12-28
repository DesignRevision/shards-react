import React from "react";
import { Button } from "shards-react";

/**
 * ## Block Level Buttons
 *
 * Using the `block` prop you can make buttons display using the full-width of their parent element.
 */
export default function BlockButtonsExample() {
  return (
    <div className="example">
      <Button block>Primary</Button>
      <Button block theme="secondary">
        Secondary
      </Button>
    </div>
  );
}
