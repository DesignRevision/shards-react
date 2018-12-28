import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ListGroupItem = props => {
  const {
    className,
    tag: Tag,
    active,
    action,
    disabled,
    theme,
    ...attrs
  } = props;

  const classes = classNames(
    className,
    active && "active",
    disabled && "disabled",
    action && "list-group-item-action",
    theme && `list-group-item-${theme}`,
    "list-group-item"
  );

  if (disabled) {
    attrs.onClick = e => {
      e.preventDefault();
    };
  }

  return <Tag {...attrs} className={classes} />;
};

ListGroupItem.propTypes = {
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * Whether it is an action item, or not.
   */
  action: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroupItem.defaultProps = {
  tag: "li"
};

export default ListGroupItem;
