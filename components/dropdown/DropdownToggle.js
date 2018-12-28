import React from "react";
import PropTypes from "prop-types";
import { Reference } from "react-popper";
import classNames from "classnames";
import Button from "../button";

import { DropdownContext } from "./DropdownContext";

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  }

  render() {
    const { className, theme, caret, split, nav, tag, ...attrs } = this.props;
    const ariaLabel = attrs["aria-label"] || "Toggle Dropdown";
    const classes = classNames(
      className,
      (caret || split) && "dropdown-toggle",
      split && "dropdown-toggle-split",
      nav && "nav-link"
    );

    const children = attrs.children || (
      <span className="sr-only">{ariaLabel}</span>
    );

    let Tag;

    if (nav && !tag) {
      Tag = "a";
      attrs.href = "#";
    } else if (!tag) {
      Tag = Button;
      attrs.theme = theme;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return (
        <Reference>
          {() => (
            <Tag
              {...attrs}
              className={classes}
              onClick={this.onClick}
              aria-expanded={this.context.isOpen}
            >
              {children}
            </Tag>
          )}
        </Reference>
      );
    }

    return (
      <Reference>
        {() => (
          <Tag
            {...attrs}
            className={classes}
            onClick={this.onClick}
            aria-expanded={this.context.isOpen}
          >
            {children}
          </Tag>
        )}
      </Reference>
    );
  }
}

DropdownToggle.propTypes = {
  /**
   * Whether it should display a caret, or not.
   */
  caret: PropTypes.bool,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * The function that should be triggered on click.
   */
  onClick: PropTypes.func,
  /**
   * The aria-haspopup attribute.
   */
  "aria-haspopup": PropTypes.bool,
  /**
   * Whether it is split, or not.
   */
  split: PropTypes.bool,
  /**
   * Whether it is located inside a nav, or not.
   */
  nav: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  theme: "primary"
};

DropdownToggle.contextType = DropdownContext;

export default DropdownToggle;
