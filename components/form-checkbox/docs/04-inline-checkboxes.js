import React from "react";
import { FormCheckbox } from "shards-react";

/**
 * ## Inline Display
 *
 * Checkboxes can also be displayed inline using the `inline` prop.
 */
export default function InlineCheckboxes() {
  return (
    <div>
      <FormCheckbox inline>Basketball</FormCheckbox>
      <FormCheckbox inline>Football</FormCheckbox>
      <FormCheckbox inline>Tennis</FormCheckbox>
    </div>
  );
}
