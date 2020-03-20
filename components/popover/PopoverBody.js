import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PopoverBody = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'popover-body');}/>
);

PopoverBody.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

PopoverBody.defaultProps = {
  tag: 'div'
};
