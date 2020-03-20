import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ListGroupItemHeading = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'list-group-item-heading')}/>
);

ListGroupItemHeading.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.any,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

ListGroupItemHeading.defaultProps = {
  tag: 'h5'
};
