import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardLink = ({
  className,
  innerRef,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} ref={innerRef} className={classNames(className, 'card-link')}/>
);

CardLink.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

CardLink.defaultProps = {
  tag: 'a'
};
