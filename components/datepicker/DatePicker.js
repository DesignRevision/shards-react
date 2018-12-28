import React from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import classNames from "classnames";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

/**
 * The `DatePicker` component is a wrapper for the [react-datepicker](https://github.com/Hacker0x01/react-datepicker) component.
 *
 * > **Note:** Make sure to check out its official documentation for the complete list of available props.
 */
const DatePicker = props => {
  const { className, size, ...attrs } = props;
  const classes = classNames(
    className,
    "form-control",
    size && `form-control-${size}`
  );

  if (!attrs.dropdownMode) {
    attrs.dropdownMode = "select";
  }

  return <ReactDatePicker {...props} className={classes} />;
};

DatePicker.propTypes = {
  ...ReactDatePicker.propTypes,
  ...{
    size: PropTypes.string
  }
};

export default DatePicker;
