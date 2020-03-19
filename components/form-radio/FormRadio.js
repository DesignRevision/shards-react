import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

export const FormRadio = ({
  className,
  children,
  inline,
  valid,
  invalid,
  innerRef,
  onChange,
  id,
  ...attrs
}) => {
  const ref = useRef(innerRef);

  return (
    <label ref={ref} className={
      classNames(
        'custom-control',
        'custom-radio',
        inline && 'custom-control-inline',
        valid && 'is-valid',
        invalid && 'is-invalid'
      )
    }>
      <input
        {...attrs}
        ref={ref}
        id={id || `dr-radio-${shortid.generate()}`}
        type="radio"
        className={
          classNames(
            className,
            'custom-control-input',
            valid && 'is-valid',
            invalid && 'is-invalid'
          )
        }
        onChange={onChange}
      />
      <label id={id} className="custom-control-label" aria-hidden="true" onClick={onChange}/>
      <span className="custom-control-description">{children}</span>
    </label>
  );
};

FormRadio.defaultProps = {
  onChange: () => {
  }
};

FormRadio.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children.
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
   * The function that should run on change.
   */
  onChange: PropTypes.func,
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
