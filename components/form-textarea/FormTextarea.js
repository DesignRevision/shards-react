import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * The `FormTextarea` component allows you to easily create multi-line text inputs.
 */
export const FormTextarea = ({
  className,
  children,
  innerRef,
  plaintext,
  size,
  valid,
  invalid,
  ...attrs
}) => {
  const ref = useRef(innerRef);
  return (
    <textarea
      {...attrs}
      className={
        classNames(
          className,
          children,
          plaintext ? 'form-control-plaintext' : 'form-control',
          plaintext && 'w-100',
          size && `form-control-${size}`,
          valid && 'is-valid',
          invalid && 'is-invalid'
        )
      }
      ref={ref}/>
  );
};

FormTextarea.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * Whether it should be displayed as plain text, or not.
   */
  plaintext: PropTypes.bool,
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

export default FormTextarea;
