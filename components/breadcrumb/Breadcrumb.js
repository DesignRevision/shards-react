import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * The breadcrumb component is great for indicating the current page's location within a navigational hierarchy.
 */
const Breadcrumb = props => {
  const {
    className,
    listClassName,
    children,
    tag: Tag,
    listTag: ListTag,
    "aria-label": label,
    ...attrs
  } = props;

  const classes = classNames(className);

  const listClasses = classNames("breadcrumb", listClassName);

  return (
    <Tag {...attrs} className={classes} aria-label={label}>
      <ListTag className={listClasses}>{children}</ListTag>
    </Tag>
  );
};

Breadcrumb.propTypes = {
  /**
   * The breadcrumb list class name.
   */
  listClassName: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The aria label value.
   */
  "aria-label": PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The component tag name.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * The breadcrumb list tag.
   */
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Breadcrumb.defaultProps = {
  "aria-label": "breadcrumb",
  tag: "nav",
  listTag: "ol"
};

export default Breadcrumb;
