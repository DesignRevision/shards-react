import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Examples and usage guidelines for form controls.
 */
export const Form = ({
  className,
  tag: Tag,
  inline,
  innerRef,
  ...attrs
}) => {
  const ref = useRef(innerRef);

  return (
    <Tag
      {...attrs}
      ref={ref}
      className={
        classNames(className, inline && 'form-inline')
      }
    />
  )
};

Form.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is inline, or not.
   */
  inline: PropTypes.bool,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

Form.defaultProps = {
  tag: 'form'
};
