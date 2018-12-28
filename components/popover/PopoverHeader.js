import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PopoverHeader = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "popover-header");

  return <Tag {...attrs} className={classes} />;
};

PopoverHeader.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PopoverHeader.defaultProps = {
  tag: "h3"
};

export default PopoverHeader;
