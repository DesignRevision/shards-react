import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardSubtitle = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-subtitle", "text-muted");

  return <Tag {...attrs} className={classes} />;
};

CardSubtitle.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.defaultProps = {
  tag: "h6"
};

export default CardSubtitle;
