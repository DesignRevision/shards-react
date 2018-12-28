import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const InputGroupText = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "input-group-text");

  return <Tag {...attrs} className={classes} />;
};

InputGroupText.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

InputGroupText.defaultProps = {
  tag: "span"
};

export default InputGroupText;
