import React from "react";
import { Form, FormGroup, FormInput } from "shards-react";

/**
 * ## Basic Form Group
 */
export default function FormGroupExample() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <FormInput id="username" />
      </FormGroup>
    </Form>
  );
}
