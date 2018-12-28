import React from "react";
import { FormCheckbox } from "shards-react";

/**
 * ## Small Toggles
 *
 * A toggle's size can be adjusted using the `small` prop.
 */
export default function SmallToggleExample() {
  return (
    <FormCheckbox toggle small>
      🚀 Enable (small) Rockets
    </FormCheckbox>
  );
}
