import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * The `FormSelect` component is a wrapper over Bootstrap's [custom select component](https://getbootstrap.com/docs/4.1/components/forms/#select-menu).
 */
export const FormSelect = ({
  className,
  children,
  size,
  valid,
  invalid,
  innerRef,
  ...attrs
}) => {
  const ref = useRef(innerRef);

  return (
    <select
      {...attrs}
      className={
        classNames(
          className,
          'form-control',
          'custom-select',
          valid && 'is-valid',
          invalid && 'is-invalid',
          size && `form-control-${size}`,
          size && `custom-select-${size}`
        )
      }
      ref={ref}>
      {children}
    </select>
  );
};

FormSelect.propTypes = {
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
