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
    this.changeFruit = this.changeFruit.bind(this);
    this.state = { selectedFruit: null };
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
          onChange={() => {
            this.changeFruit("orange");
          }}
        >
          Orange
        </FormRadio>
        <FormRadio
          name="fruit"
          onChange={() => {
            this.changeFruit("lemon");
          }}
        >
          Lemon
        </FormRadio>
        <FormRadio
          name="fruit"
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
