import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PopoverBody = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "popover-body");

  return <Tag {...attrs} className={classes} />;
};

PopoverBody.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PopoverBody.defaultProps = {
  tag: "div"
};

export default PopoverBody;
