import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const ModalHeader = ({
  className,
  children,
  toggle,
  tag: Tag,
  closeAriaLabel,
  titleClass,
  ...attrs
}) => (
  <div
    className={classNames("modal-header", className)}
    {...attrs}>
    <Tag className={classNames("modal-title", titleClass)}>{children}</Tag>
    {toggle && (
      <button
        type="button"
        onClick={toggle}
        className="close"
        aria-label={closeAriaLabel}
      >
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    )}
  </div>
);

ModalHeader.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The toggle function.
   */
  toggle: PropTypes.func,
  /**
   * The component's tag type.
   */
  tag: PropTypes.string,
  /**
   * The close button's aria label.
   */
  closeAriaLabel: PropTypes.string,
  /**
   * The class for the modal title.
   */
  titleClass: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ModalHeader.defaultProps = {
  tag: "h5",
  closeAriaLabel: "Close"
};
