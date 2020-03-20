import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const NavItem = ({className, active, disabled, tag: Tag, ...attrs}) => (
  <Tag
    {...attrs}
    className={
      classNames(
        className,
        'nav-item',
        active && 'active',
        disabled && 'disabled'
      )
    }
  />
);

NavItem.propTypes = {
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

NavItem.defaultProps = {
  tag: 'li'
};
