import React from "react";
import { Progress } from "shards-react";

/**
 * ## Multiple
 *
 *Inside the `Progress` component you can also nest multiple sub-components.
 */
export default function BasicProgress() {
  return (
    <Progress multi>
      <Progress bar value="50" />
      <Progress bar theme="success" value="20" />
    </Progress>
  );
}
