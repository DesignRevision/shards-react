import React from "react";
import { Slider } from "shards-react";

/**
 * ## Multiple Values
 *
 * If you'd like to control multiple values, you can use an `Array` for the `start` prop.
 */
export default class SliderCustomRange extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
    this.state = { value: [20, 80] };
  }

  handleSlide(e) {
    this.setState({
      value: [parseFloat(e[0]), parseFloat(e[1])]
    });
  }

  render() {
    return (
      <div>
        <p>Value: {JSON.stringify(this.state.value)}</p>
        <Slider
          connect
          onSlide={this.handleSlide}
          start={this.state.value}
          range={{ min: 0, max: 100 }}
        />
      </div>
    );
  }
}
