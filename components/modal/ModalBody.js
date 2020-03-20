import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ModalBody = ({className, children, ...attrs}) => (
  <div className={classNames('modal-body', className)} {...attrs}>
    {children}
  </div>
);

ModalBody.propTypes = {
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
