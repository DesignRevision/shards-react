import React from "react";
import { DatePicker } from "shards-react";

/**
 * ## Excluded Dates
 *
 * You can disable certain dates using the `excludeDates` prop.
 */
export default class DatepickerExcludedDatesExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      startDate: new Date()
    };
  }

  handleOnChange(val) {
    this.setState({
      startDate: new Date(val)
    });
  }

  render() {
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);

    return (
      <div>
        <p className="mb-2">
          Selected date: <strong>{this.state.startDate.toString()}</strong>
        </p>
        <DatePicker
          size="sm"
          selected={this.state.startDate}
          onChange={this.handleOnChange}
          excludeDates={[today, yesterday]}
          dropdownMode="select"
        />
      </div>
    );
  }
}
