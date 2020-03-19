import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardImgOverlay = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-img-overlay')}/>
);

CardImgOverlay.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

CardImgOverlay.defaultProps = {
  tag: 'div'
};
