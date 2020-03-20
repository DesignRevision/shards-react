import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ListGroupItemText = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'list-group-item-text')}/>
);

ListGroupItemText.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

ListGroupItemText.defaultProps = {
  tag: 'p'
};
