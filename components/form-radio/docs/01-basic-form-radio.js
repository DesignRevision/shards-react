import React from "react";
import { FormRadio } from "shards-react";

/**
 * ## Basic Demo
 *
 * The `FormRadio` component is a wrapper over Bootstrap's [custom radio component](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios-1).
 */
export default class FormRadioExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFruit: null
    };

    this.changeFruit = this.changeFruit.bind(this);
  }

  changeFruit(fruit) {
    this.setState({
      selectedFruit: fruit
    });
  }

  render() {
    return (
      <div>
        <p className="mb-2">Select your favorite fruit:</p>
        <FormRadio
          name="fruit"
          checked={this.state.selectedFruit === "orange"}
          onChange={() => {
            this.changeFruit("orange");
          }}
        >
          Orange
        </FormRadio>
        <FormRadio
          name="fruit"
          checked={this.state.selectedFruit === "lemon"}
          onChange={() => {
            this.changeFruit("lemon");
          }}
        >
          Lemon
        </FormRadio>
        <FormRadio
          name="fruit"
          checked={this.state.selectedFruit === "kiwi"}
          onChange={() => {
            this.changeFruit("kiwi");
          }}
        >
          Kiwi
        </FormRadio>
        <span>
          <strong>Selected fruit:</strong>{" "}
          <span>{this.state.selectedFruit || "none"}</span>
        </span>
      </div>
    );
  }
}
