import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from "shards-react";

/**
 * ## Seamless Input Groups
 *
 * You can create seamless input groups using the `seamless` prop.
 */
export default function InputGroupAddonExample() {
  return (
    <InputGroup seamless>
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </InputGroupText>
      </InputGroupAddon>
      <FormInput />
    </InputGroup>
  );
}
