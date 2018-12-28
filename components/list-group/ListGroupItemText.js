import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ListGroupItemText = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "list-group-item-text");

  return <Tag {...attrs} className={classes} />;
};

ListGroupItemText.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroupItemText.defaultProps = {
  tag: "p"
};

export default ListGroupItemText;
