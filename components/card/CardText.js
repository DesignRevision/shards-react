import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardText = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-text')}/>
);

CardText.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardText.defaultProps = {
  tag: 'p'
};
