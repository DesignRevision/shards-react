import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * List groups allow you to display series of content.
 */
const ListGroup = props => {
  const { className, tag: Tag, flush, small, ...attrs } = props;
  const classes = classNames(
    className,
    "list-group",
    small && "list-group-sm",
    flush && "list-group-flush"
  );

  return <Tag {...attrs} className={classes} />;
};

ListGroup.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether the list group should be flushed, or not.
   */
  flush: PropTypes.bool,
  /**
   * Whether the list group is small, or not.
   */
  small: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroup.defaultProps = {
  tag: "ul"
};

export default ListGroup;
