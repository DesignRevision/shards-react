import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardFooter = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-footer')}/>
);

CardFooter.propTypes = {
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  /**
   * The class name.
   */
  className: PropTypes.string
};

CardFooter.defaultProps = {
  tag: 'div'
};
