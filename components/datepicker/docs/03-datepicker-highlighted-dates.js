import React from "react";
import { DatePicker } from "shards-react";

/**
 * ## Highlighted Dates
 *
 * You can highlight certain dates using the `highlightDates` prop.
 */
export default class DatepickerHighlightedDatesExample extends React.Component {
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
    const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
    const twoDaysAgo = (d => new Date(d.setDate(d.getDate() - 2)))(new Date());

    return (
      <div>
        <p className="mb-2">
          Selected date: <strong>{this.state.startDate.toString()}</strong>
        </p>
        <DatePicker
          size="sm"
          selected={this.state.startDate}
          onChange={this.handleOnChange}
          highlightDates={[today, yesterday, twoDaysAgo]}
          dropdownMode="select"
        />
      </div>
    );
  }
}
