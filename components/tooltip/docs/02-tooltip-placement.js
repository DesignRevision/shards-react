import React from "react";
import { Tooltip, Button } from "shards-react";

/**
 * ## Placement
 *
 * By default, the tooltips are placed on top. However, you can change this via the `placement` prop.
 */
export default class TooltipPlacementExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false
    };
  }

  toggle(pos) {
    const newState = {};
    newState[pos] = !this.state[pos];
    this.setState({ ...this.state, ...newState });
  }

  render() {
    return (
      <div>
        <Button id="TooltipTop" className="mr-2">
          Top
        </Button>
        <Tooltip
          open={this.state.top}
          target="#TooltipTop"
          toggle={() => this.toggle("top")}
        >
          I am on top! ☝️
        </Tooltip>

        <Button id="TooltipBottom" className="mr-2">
          Bottom
        </Button>
        <Tooltip
          placement="bottom"
          open={this.state.bottom}
          target="#TooltipBottom"
          toggle={() => this.toggle("bottom")}
        >
          I am at the bottom! 👇
        </Tooltip>

        <Button id="TooltipLeft" className="mr-2">
          Left
        </Button>
        <Tooltip
          placement="left"
          open={this.state.left}
          target="#TooltipLeft"
          toggle={() => this.toggle("left")}
        >
          I am on the left! 👈
        </Tooltip>

        <Button id="TooltipRight" className="mr-2">
          Right
        </Button>
        <Tooltip
          placement="right"
          open={this.state.right}
          target="#TooltipRight"
          toggle={() => this.toggle("right")}
        >
          I am on the right! 👉
        </Tooltip>
      </div>
    );
  }
}
