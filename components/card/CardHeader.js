import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardHeader = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-header')}/>
);

CardHeader.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardHeader.defaultProps = {
  tag: 'div'
};
