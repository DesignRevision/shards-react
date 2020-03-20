import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PopoverHeader = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'popover-header')}/>
);

PopoverHeader.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

PopoverHeader.defaultProps = {
  tag: 'h3'
};
