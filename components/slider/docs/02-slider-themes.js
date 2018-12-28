import React from "react";
import { Slider } from "shards-react";

/**
 * ## Slider Themes
 *
 * Adjusting the theme color of the slider can be achieved via the `theme` prop.
 */
export default function BasicSliderExample() {
  return (
    <Slider
      theme="success"
      connect={[true, false]}
      start={[50]}
      range={{ min: 0, max: 100 }}
    />
  );
}
