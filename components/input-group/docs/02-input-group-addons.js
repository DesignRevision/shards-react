import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from "shards-react";

/**
 * ## Input Group Addons
 *
 * Input group addons can be created using the `<InputGroupAddon>` component. The type of the addon component can be also controlled via the `type` prop using either `append` or `prepend` as values.
 */
export default function InputGroupAddonExample() {
  return (
    <InputGroup>
      <InputGroupAddon type="prepend">
        <InputGroupText>Total Amount</InputGroupText>
      </InputGroupAddon>
      <FormInput />
      <InputGroupAddon type="append">
        <InputGroupText>.00 (USD)</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
