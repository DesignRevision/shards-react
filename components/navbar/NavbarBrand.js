import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const NavbarBrand = ({className, tag: Tag, ...attrs}) => (
  <Tag
    {...attrs}
    className={classNames(className, "navbar-brand")}
  />
);

NavbarBrand.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarBrand.defaultProps = {
  tag: "a"
};
