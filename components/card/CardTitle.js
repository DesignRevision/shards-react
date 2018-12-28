import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardTitle = props => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, "card-title");

  return <Tag {...attributes} className={classes} />;
};

CardTitle.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardTitle.defaultProps = {
  tag: "h5"
};

export default CardTitle;
