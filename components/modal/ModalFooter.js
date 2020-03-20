import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ModalFooter = ({className, children, ...attrs}) => (
  <div className={classNames('modal-footer', className)} {...attrs}>
    {children}
  </div>
);

ModalFooter.propTypes = {
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
