import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const NavbarToggler = ({className, children, tag: Tag, ...attrs}) => (
  <Tag {...attrs} className={classNames(className, 'navbar-toggler')}>
    {children || <span className="navbar-toggler-icon"/>}
  </Tag>
);

NavbarToggler.propTypes = {
  /**
   * The component's tag type.
   */
  type: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

NavbarToggler.defaultProps = {
  tag: 'button',
  type: 'button'
};
