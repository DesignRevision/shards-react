import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { INPUT_TYPES } from '../constants';

/**
 * The form input allows you to create various text style inputs such as `text`, `password`, `email`, `number`, `url`, `search` and more.
 */
export const FormInput = ({
  className,
  plaintext,
  size,
  invalid,
  valid,
  innerRef,
  ...attrs
}) => {
  const ref = useRef(innerRef);

  return (
    <input
      {...attrs}
      ref={ref}
      className={
        classNames(
          className,
          plaintext ? 'form-control-plaintext' : 'form-control',
          plaintext && 'w-100',
          size && `form-control-${size}`,
          valid && 'is-valid',
          invalid && 'is-invalid'
        )
      }/>
  )
};

FormInput.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * Whether it is inline, or not.
   */
  inline: PropTypes.bool,
  /**
   * The input type.
   */
  type: PropTypes.oneOf(INPUT_TYPES),
  /**
   * Whether it is plaintext, or not.
   */
  plaintext: PropTypes.bool,
  /**
   * The input's size.
   */
  size: PropTypes.string,
  /**
   * Whether it is valid, or not.
   */
  valid: PropTypes.bool,
  /**
   * Whether it is invalid, or not.
   */
  invalid: PropTypes.bool,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};
