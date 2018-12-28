import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardImg = props => {
  const { className, top, bottom, tag: Tag, ...attrs } = props;
  let cardImgClass = "";

  if (top) {
    cardImgClass = "card-img-top";
  }

  if (bottom) {
    cardImgClass = "card-img-bottom";
  }

  cardImgClass = classNames(className, cardImgClass);

  return <Tag {...attrs} className={cardImgClass} />;
};

CardImg.propTypes = {
  /**
   * Whether the image is positioned at the top of the card, or not.
   */
  top: PropTypes.bool,
  /**
   * Whether the image is positioned at the bottom of the card, or not.
   */
  bottom: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardImg.defaultProps = {
  tag: "img"
};

export default CardImg;
