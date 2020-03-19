import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardTitle = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-title')}/>
);

CardTitle.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardTitle.defaultProps = {
  tag: 'h5'
};
