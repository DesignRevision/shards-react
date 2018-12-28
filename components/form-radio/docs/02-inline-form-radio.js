import React from "react";
import { FormRadio } from "shards-react";

/**
 * ## Inline Display
 *
 * Radios can also be displayed inline using the `inline` prop.
 */
export default function FormRadioExample() {
  return (
    <div>
      <p>Select your favorite sport:</p>
      <FormRadio inline name="sport">
        Basketball
      </FormRadio>
      <FormRadio inline name="sport">
        Football
      </FormRadio>
      <FormRadio inline name="sport">
        Tennis
      </FormRadio>
    </div>
  );
}
