import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Button toolbars allow you to group a series of button or input groups on a single line.
 */
const ButtonToolbar = props => {
  const { className, ...attrs } = props;
  const classes = classNames(className, "btn-toolbar");

  return <div className={classes} {...attrs} />;
};

ButtonToolbar.propTypes = {
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
  ])
};

export default ButtonToolbar;
