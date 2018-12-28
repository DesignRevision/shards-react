import React from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "shards-react";

/**
 * ## Placement
 *
 * Using the `placement` prop you can adjust where your popover will be displayed.
 */
export default class PopoverPlacementExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Button id="popover-2" onClick={this.toggle}>
          Toggle
        </Button>
        <Popover
          placement="left"
          open={this.state.open}
          toggle={this.toggle}
          target="#popover-2"
        >
          <PopoverHeader>Title here</PopoverHeader>
          <PopoverBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
