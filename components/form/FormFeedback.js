import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const FormFeedback = ({
  className,
  valid,
  tooltip,
  tag: Tag,
  ...attrs
}) => (
  <Tag
    {...attrs}
    className={
      classNames(
        className,
        `${ valid ? '' : 'in' }valid-${ tooltip ? 'tooltip' : 'feedback' }`
      )
    }/>
);

FormFeedback.propTypes = {
  /**
   * The children.
   */
  children: PropTypes.node,
  /**
   * The tag type.
   */
  tag: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether the feedback is valid, or not.
   */
  valid: PropTypes.bool,
  /**
   * Whether the feedback should be displayed as tooltip.
   */
  tooltip: PropTypes.bool
};

FormFeedback.defaultProps = {
  tag: 'div',
  valid: undefined
};
