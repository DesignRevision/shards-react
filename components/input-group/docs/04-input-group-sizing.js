import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from "shards-react";

/**
 * ## Sizing
 *
 * You can control the size of your input group via the `size` prop. Available options are `sm` for small and `lg` for large.
 */
export default function InputGroupAddonExample() {
  return (
    <div>
      <InputGroup size="sm" className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Total Amount</InputGroupText>
        </InputGroupAddon>
        <FormInput />
        <InputGroupAddon type="append">
          <InputGroupText>$ (USD)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Total Amount</InputGroupText>
        </InputGroupAddon>
        <FormInput />
        <InputGroupAddon type="append">
          <InputGroupText>$ (USD)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup size="lg">
        <InputGroupAddon type="prepend">
          <InputGroupText>Total Amount</InputGroupText>
        </InputGroupAddon>
        <FormInput />
        <InputGroupAddon type="append">
          <InputGroupText>$ (USD)</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
