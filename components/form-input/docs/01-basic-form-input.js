import React from "react";
import { FormInput } from "shards-react";

/**
 * ## Form Input
 *
 * The `FormInput` component is a `text` input by default. However, you can set its type prop to one of the supported types as well: `password`, `email`, `number`, `url`, `tel`, `search`, `date`, `datetime`, `datetime-local`, `month`, `week`, `time`.
 */
export default function FormInputExample() {
  return <FormInput placeholder="My form input" />;
}
