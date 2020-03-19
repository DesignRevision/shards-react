import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Button groups allow you to group buttons together on a single line.
 */
export const ButtonGroup = ({
  className,
  vertical,
  size,
  ...attrs
}) => (
  <div className={
    classNames(
      className,
      size && `btn-group-${size}`,
      vertical ? 'btn-group-vertical' : 'btn-group'
    )
  } {...attrs} />
);

ButtonGroup.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * Whether it is vertical, or not.
   */
  vertical: PropTypes.bool
};
