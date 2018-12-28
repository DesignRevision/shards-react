import React from "react";
import { Tooltip, Button } from "shards-react";

/**
 * ## Triggers
 *
 * You can control what triggers your tooltip to show using the `trigger` prop.
 */
export default class TooltipClickExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <Button id="TooltipClickExample">Click Me!</Button>
        <Tooltip
          trigger="click"
          open={this.state.open}
          target="#TooltipClickExample"
          toggle={this.toggle}
        >
          😁 You clicked to see me!
        </Tooltip>
      </div>
    );
  }
}
