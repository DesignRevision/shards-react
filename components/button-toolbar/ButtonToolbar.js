import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Button toolbars allow you to group a series of button or input groups on a single line.
 */
export const ButtonToolbar = ({className, ...attrs}) => (
  <div className={classNames(className, 'btn-toolbar')} {...attrs} />
);

ButtonToolbar.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
