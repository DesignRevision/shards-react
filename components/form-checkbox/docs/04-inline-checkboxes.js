import React from "react";
import { FormCheckbox } from "shards-react";

/**
 * ## Inline Display
 *
 * Checkboxes can also be displayed inline using the `inline` prop.
 */
export default class InlineCheckboxes extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      basketball: false,
      football: false,
      tennis: false
    };
  }

  handleChange(e, fruit) {
    const newState = {};
    newState[fruit] = !this.state[fruit];
    this.setState({ ...this.state, ...newState });
  }

  render() {
    return (
      <div>
        <p>Select your favorite fruits:</p>
        <FormCheckbox
          inline
          checked={this.state.basketball}
          onChange={e => this.handleChange(e, "basketball")}
        >
          Basketball
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.football}
          onChange={e => this.handleChange(e, "football")}
        >
          Football
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.tennis}
          onChange={e => this.handleChange(e, "tennis")}
        >
          Tennis
        </FormCheckbox>
      </div>
    );
  }
}
