import React from "react";
import { Button } from "shards-react";

/**
 * ## Button Sizes
 *
 * Using the `size` prop you can control the size of your buttons. There are three sizes available: normal (default), `lg` for large buttons and `sm` for small buttons.
 */
export default function ButtonsSizesExample() {
  return (
    <div className="example">
      <Button size="lg">Large</Button>
      <Button>Normal</Button>
      <Button size="sm">Small</Button>
    </div>
  );
}
