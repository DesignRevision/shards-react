import React from 'react';
import { Button, Tooltip } from 'shards-react';

/**
 * ## Basic Example
 *
 * Tooltips can be created using the `Tooltip` component.
 */
export default class TooltipExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {open: false};
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <Button id="TooltipExample">Hover Me!</Button>
        <Tooltip
          open={this.state.open}
          target="#TooltipExample"
          toggle={this.toggle}
        >
          😁 Woo! I am a tooltip!
        </Tooltip>
      </div>
    );
  }
}
