import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FormFeedback = props => {
  const { className, valid, tooltip, tag: Tag, ...attrs } = props;
  const validMode = tooltip ? "tooltip" : "feedback";

  const classes = classNames(
    className,
    valid ? `valid-${validMode}` : `invalid-${validMode}`
  );

  return <Tag {...attrs} className={classes} />;
};

FormFeedback.propTypes = {
  /**
   * The children.
   */
  children: PropTypes.node,
  /**
   * The tag type.
   */
  tag: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether the feedback is valid, or not.
   */
  valid: PropTypes.bool,
  /**
   * Whether the feedback should be displayed as tooltip.
   */
  tooltip: PropTypes.bool
};

FormFeedback.defaultProps = {
  tag: "div",
  valid: undefined
};

export default FormFeedback;
