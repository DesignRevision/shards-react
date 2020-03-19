import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardImg = ({
  bottom,
  className,
  tag: Tag,
  top,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, bottom ? 'card-img-bottom' : top ? 'card-img-top' : '')}/>
);

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
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardImg.defaultProps = {
  tag: 'img'
};
