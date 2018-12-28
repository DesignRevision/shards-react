import React from "react";
import { Button, ButtonGroup } from "shards-react";

/**
 * ## Button Group Size
 *
 * The button group's size can be controlled via the `size` prop. The button group can be normal (default), `small` or `large`.
 */
export default function SizeButtonGroupExample() {
  return (
    <div className="example">
      <ButtonGroup size="lg" className="mr-2">
        <Button>Large</Button>
        <Button>Large</Button>
      </ButtonGroup>

      <ButtonGroup className="mr-2">
        <Button>Normal</Button>
        <Button>Normal</Button>
      </ButtonGroup>

      <ButtonGroup size="sm" className="mr-2">
        <Button>Small</Button>
        <Button>Small</Button>
      </ButtonGroup>
    </div>
  );
}
