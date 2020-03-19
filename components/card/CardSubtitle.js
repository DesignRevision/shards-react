import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardSubtitle = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-subtitle', 'text-muted')}/>
);

CardSubtitle.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardSubtitle.defaultProps = {
  tag: 'h6'
};
