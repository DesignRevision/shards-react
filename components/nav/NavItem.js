import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavItem = props => {
  const { className, active, disabled, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    "nav-item",
    active && "active",
    disabled && "disabled"
  );

  return <Tag {...attrs} className={classes} />;
};

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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavItem.defaultProps = {
  tag: "li"
};

export default NavItem;
