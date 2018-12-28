import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ModalFooter = props => {
  const { className, children, ...attrs } = props;
  const classes = classNames("modal-footer", className);

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

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

export default ModalFooter;
