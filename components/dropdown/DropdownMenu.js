import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Popper } from "react-popper";

import { DropdownContext } from "./DropdownContext";
import { DROPDOWN_POSITION_MAP } from "../constants";

class DropdownMenu extends React.Component {
  render() {
    const {
      className,
      children,
      right,
      tag: Tag,
      flip,
      small,
      modifiers,
      persist,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "dropdown-menu",
      small && "dropdown-menu-small",
      right && "dropdown-menu-right",
      this.context.open && "show"
    );

    if (persist || (this.context.open && !this.context.inNavbar)) {
      const pos1 =
        DROPDOWN_POSITION_MAP[this.context.direction.toUpperCase()] || "bottom";
      const pos2 = right ? "end" : "start";
      attrs.placement = `${pos1}-${pos2}`;
      attrs.component = Tag;
      attrs.modifiers = !flip
        ? {
            ...modifiers,
            ...{
              flip: {
                enabled: false
              }
            }
          }
        : modifiers;

      return (
        <Popper {...attrs}>
          {({ ref, placement }) => (
            <div
              ref={ref}
              className={classes}
              x-placement={placement}
              aria-hidden={!this.context.open}
              tabIndex="-1"
              role="menu"
            >
              {children}
            </div>
          )}
        </Popper>
      );
    }

    return (
      <Tag tabIndex="-1" role="menu" {...attrs} className={classes}>
        {children}
      </Tag>
    );
  }
}

DropdownMenu.propTypes = {
  /**
   * The component tag.
   */
  tag: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether it is positioned on the right side, or not.
   */
  right: PropTypes.bool,
  /**
   * Whether it should flip, or not.
   */
  flip: PropTypes.bool,
  /**
   * Whether the dropdown is small, or not.
   */
  small: PropTypes.bool,
  /**
   * The modifiers config object.
   */
  modifiers: PropTypes.object,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it should persist, or not.
   */
  persist: PropTypes.bool
};

DropdownMenu.defaultProps = {
  tag: "div",
  flip: true
};

DropdownMenu.contextType = DropdownContext;

export default DropdownMenu;
