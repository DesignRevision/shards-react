import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Using the `Navbar` component you can create powerful and responsive navigation headers.
 */
const Navbar = props => {
  const {
    className,
    expand,
    fixed,
    sticky,
    theme,
    type,
    tag: Tag,
    ...attrs
  } = props;

  let expandClass;

  if (expand === false) {
    expandClass = false;
  } else if (expand === true || expand === "xs") {
    expandClass = "navbar-expand";
  } else if (typeof expand === "string") {
    expandClass = `navbar-expand-${expand}`;
  }

  const classes = classNames(
    className,
    "navbar",
    expandClass,
    type === "light" && "navbar-light",
    type === "dark" && "navbar-dark",
    theme && `bg-${theme}`,
    fixed && `fixed-${fixed}`,
    sticky && `sticky-${sticky}`
  );

  return <Tag {...attrs} className={classes} />;
};

Navbar.propTypes = {
  /**
   * Whether it is full, or not.
   */
  full: PropTypes.bool,
  /**
   * Whether it is fixed, or not.
   */
  fixed: PropTypes.string,
  /**
   * Whether it is sticky, or not.
   */
  sticky: PropTypes.string,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * The role attribute.
   */
  role: PropTypes.string,
  /**
   * The class name attribute.
   */
  className: PropTypes.string,
  /**
   * The navbar type.
   */
  type: PropTypes.oneOf(["dark", "light"]),
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Whether it should expand, or not.
   */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Navbar.defaultProps = {
  tag: "nav",
  expand: false
};

export default Navbar;
