import React from "react";
import { Alert } from "shards-react";

/**
 * ## Dismissible Alerts
 *
 * Dismissible alerts allow you to hide them using an `X` button.
 */
export default class DismissibleAlertExample extends React.Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
    this.state = { visible: true };
  }

  render() {
    return (
      <Alert dismissible={this.dismiss} open={this.state.visible}>
        You can easily dismiss me using the <strong>close</strong> button &rarr;
      </Alert>
    );
  }

  dismiss() {
    this.setState({ visible: false });
  }
}
