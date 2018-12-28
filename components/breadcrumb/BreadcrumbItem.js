import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const BreadcrumbItem = props => {
  const { className, active, tag: Tag, ...attrs } = props;

  const classes = classNames(className, active && "active", "breadcrumb-item");

  return (
    <Tag
      {...attrs}
      className={classes}
      aria-current={active ? "page" : undefined}
    />
  );
};

BreadcrumbItem.propTypes = {
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

BreadcrumbItem.defaultProps = {
  tag: "li"
};

export default BreadcrumbItem;
