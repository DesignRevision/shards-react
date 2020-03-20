import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const NavLink = ({
  className,
  active,
  disabled,
  tag: Tag,
  innerRef,
  ...attrs
}) => {
  return (
    <Tag
      {...attrs}
      ref={innerRef}
      onClick={
        e => {
          if (disabled) {
            e.preventDefault();
            return;
          }

          if (attrs.href === '#') {
            e.preventDefault();
          }

          if (attrs.onClick) {
            attrs.onClick(e);
          }
        }
      }
      className={
        classNames(
          className,
          'nav-link',
          disabled && 'disabled',
          active && 'active'
        )
      }
    />
  )
};

NavLink.propTypes = {
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The function that should be triggered on click.
   */
  onClick: PropTypes.func,
  /**
   * The href attribute value.
   */
  href: PropTypes.any,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

NavLink.defaultProps = {
  tag: 'a'
};
