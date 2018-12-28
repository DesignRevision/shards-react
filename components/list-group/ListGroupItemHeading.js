import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ListGroupItemHeading = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "list-group-item-heading");

  return <Tag {...attrs} className={classes} />;
};

ListGroupItemHeading.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.any,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroupItemHeading.defaultProps = {
  tag: "h5"
};

export default ListGroupItemHeading;
