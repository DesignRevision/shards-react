import React from "react";
import { Button, ButtonGroup } from "shards-react";

/**
 * ## Vertical Button Groups
 *
 * You can stack button groups vertically using the `vertical` prop.
 */
export default function VerticalButtonGroupExample() {
  return (
    <ButtonGroup vertical>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  );
}
