import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardGroup = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-group')}/>
);

CardGroup.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardGroup.defaultProps = {
  tag: 'div'
};
