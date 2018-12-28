import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardImgOverlay = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-img-overlay");

  return <Tag {...attrs} className={classes} />;
};

CardImgOverlay.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardImgOverlay.defaultProps = {
  tag: "div"
};

export default CardImgOverlay;
