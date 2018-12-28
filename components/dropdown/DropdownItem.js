import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import omit from "lodash.omit";

import { DropdownContext } from "./DropdownContext";

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return "-1";
    }

    return "0";
  }

  render() {
    let { className, divider, tag: Tag, header, active, ...attrs } = omit(
      this.props,
      ["toggle"]
    );

    const tabIndex = this.getTabIndex();

    const classes = classNames(
      className,
      attrs.disabled && "disabled",
      !divider && !header && "dropdown-item",
      header && "dropdown-header",
      divider && "dropdown-divider",
      active && "active"
    );

    if (Tag === "button") {
      if (header) {
        Tag = "h6";
      } else if (divider) {
        Tag = "div";
      } else if (attrs.href) {
        Tag = "a";
      }
    }

    return (
      <Tag
        type={
          Tag === "button" && (attrs.onClick || attrs.toggle)
            ? "button"
            : undefined
        }
        {...attrs}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
      />
    );
  }
}

DropdownItem.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * Whether it is a divider, or not.
   */
  divider: PropTypes.bool,
  /**
   * Whether it is a dropdown header item, or not.
   */
  header: PropTypes.bool,
  /**
   * The function that should be triggered on click.
   */
  onClick: PropTypes.func,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it should toggle the dropdown, or not.
   */
  toggle: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

DropdownItem.defaultProps = {
  tag: "button",
  toggle: true
};

DropdownItem.contextType = DropdownContext;

export default DropdownItem;
