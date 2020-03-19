import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardBody = ({
  className,
  tag: Tag,
  children,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-body')}>
    {children}
  </Tag>
);

CardBody.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardBody.defaultProps = {
  tag: 'div'
};
