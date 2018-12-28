import React from "react";
import { Button } from "shards-react";

/**
 * ## Button Themes
 *
 * Using the theme prop you can easily change the appearance of your button using one the main theme colors: `primary, secondary, success, danger, warning, info, light` and `dark`. The default theme value is `primary`.
 */
export default function ButtonsExample() {
  return (
    <div className="example">
      <Button>Primary</Button>
      <Button theme="secondary">Secondary</Button>
      <Button theme="success">Success</Button>
      <Button theme="info">Info</Button>
      <Button theme="warning">Warning</Button>
      <Button theme="danger">Danger</Button>
      <Button theme="light">Light</Button>
      <Button theme="dark">Dark</Button>
    </div>
  );
}
