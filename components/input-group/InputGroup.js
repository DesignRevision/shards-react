import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Using the `InputGroup` component you can easily extend form controls by adding various elements such as text, buttons and button groups.
 */
const InputGroup = props => {
  const { className, tag: Tag, size, seamless, ...attrs } = props;
  const classes = classNames(
    className,
    "input-group",
    seamless && "input-group-seamless",
    size && `input-group-${size}`
  );

  return <Tag {...attrs} className={classes} />;
};

InputGroup.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * Whether it is seamless, or not.
   */
  seamless: PropTypes.bool,
  /**
   * The tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

InputGroup.defaultProps = {
  tag: "div"
};

export default InputGroup;
