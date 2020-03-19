import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

/**
 * The `FormCheckbox` component is a wrapper over Bootstrap's [custom checkbox component](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios-1).
 */
export const FormCheckbox = ({
  className,
  children,
  inline,
  valid,
  invalid,
  innerRef,
  toggle,
  small,
  id,
  ...attrs
}) => {
  const ref = useRef(innerRef);

  return (
    <label className={
      classNames(
        className,
        'custom-control',
        !toggle ? 'custom-checkbox' : 'custom-toggle',
        toggle && small && 'custom-toggle-sm',
        inline && 'custom-control-inline',
        valid && 'is-valid',
        invalid && 'is-invalid'
      )
    } ref={ref}>
      <input
        {...attrs}
        ref={innerRef}
        id={id || `dr-checkbox-${shortid.generate()}`}
        type="checkbox"
        className={
          classNames(
            'custom-control-input',
            valid && 'is-valid',
            invalid && 'is-invalid'
          )
        }
      />
      <label
        id={id || `dr-checkbox-${shortid.generate()}`}
        className="custom-control-label"
        aria-hidden="true"
        onClick={attrs.onChange}
      />
      <span className="custom-control-description">{children}</span>
    </label>
  );
};

FormCheckbox.defaultProps = {
  onChange: () => {
  }
};

FormCheckbox.propTypes = {
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
   * The id.
   */
  id: PropTypes.string,
  /**
   * Whether it is valid, or not.
   */
  valid: PropTypes.bool,
  /**
   * Whether it is invalid, or not.
   */
  invalid: PropTypes.bool,
  /**
   * Whether it is a toggle button, or not.
   */
  toggle: PropTypes.bool,
  /**
   * Whether it is small (toggle), or not.
   */
  small: PropTypes.bool,
  /**
   * The onChange handler.
   */
  onChange: PropTypes.func,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

export default FormCheckbox;
