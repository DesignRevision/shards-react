import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarToggler = props => {
  const { className, children, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "navbar-toggler");

  return (
    <Tag {...attrs} className={classes}>
      {children || <span className="navbar-toggler-icon" />}
    </Tag>
  );
};

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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

export default NavbarToggler;
