import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import classNames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

/**
 * The `DatePicker` component is a wrapper for the [react-datepicker](https://github.com/Hacker0x01/react-datepicker) component.
 *
 * > **Note:** Make sure to check out its official documentation for the complete list of available props.
 */
export const DatePicker = ({
  className,
  size,
  ...attrs
}) => (
  <ReactDatePicker {...{
    ...attrs,
    className: classNames(
      className,
      'form-control',
      size && `form-control-${size}`
    ),
    dropdownMode: attrs.dropdownMode || 'select',
    size,
  }} />
);

DatePicker.propTypes = {
  ...ReactDatePicker.propTypes,
  ...{
    size: PropTypes.string
  }
};
