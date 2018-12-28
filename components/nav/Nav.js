import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * The `Nav` component allows you to build all types of navigation components.
 */
const Nav = props => {
  const {
    className,
    navbar,
    horizontal,
    vertical,
    tabs,
    card,
    pills,
    justified,
    fill,
    tag: Tag,
    ...attrs
  } = props;

  let verticalClass;

  if (vertical === true || vertical === "xs") {
    verticalClass = "flex-column";
  } else if (vertical === false) {
    verticalClass = false;
  } else if (typeof vertical === "string") {
    verticalClass = `flex-${vertical}-column`;
  }

  const classes = classNames(
    className,
    navbar ? "navbar-nav" : "nav",
    horizontal && `justify-content-${horizontal}`,
    verticalClass,
    tabs && "nav-tabs",
    card && tabs && "card-header-tabs",
    pills && "nav-pills",
    card && pills && "card-header-pills",
    justified && "nav-justified",
    fill && "nav-fill"
  );

  return <Tag {...attrs} className={classes} />;
};

Nav.defaultProps = {
  tag: "ul",
  vertical: false
};

Nav.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is located inside a Navbar, or not.
   */
  navbar: PropTypes.bool,
  /**
   * Justify content horizontally.
   */
  horizontal: PropTypes.string,
  /**
   * Whether it should be displayed as tabs, or not.
   */
  tabs: PropTypes.bool,
  /**
   * Whether it is located inside a card, or not.
   */
  card: PropTypes.bool,
  /**
   * Whether it should be displayed as pills, or not.
   */
  pills: PropTypes.bool,
  /**
   * Whether it is justified, or not.
   */
  justified: PropTypes.bool,
  /**
   * Whether it should fill the entire space, or not.
   */
  fill: PropTypes.bool,
  /**
   * Whether it is vertical, or not.
   */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Nav;
