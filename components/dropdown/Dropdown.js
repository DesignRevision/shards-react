import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Manager } from "react-popper";
import omit from "lodash.omit";

import { DropdownContext } from "./DropdownContext";
import { KEYCODES, EVENTS } from "./../constants";

/**
 * You can use dropdowns to display accessible contextual overlays for displaying lists of links and more.
 */
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleListeners = this.handleListeners.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.getContainer = this.getContainer.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.handleListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.handleListeners();
    }
  }

  handleListeners() {
    if (this.props.open) {
      this.addListeners();
      return;
    }

    this.removeListeners();
  }

  addListeners() {
    EVENTS.CLICK.forEach(e =>
      document.addEventListener(e, this.handleDocumentClick, true)
    );
  }

  removeListeners() {
    EVENTS.CLICK.forEach(e =>
      document.removeEventListener(e, this.handleDocumentClick, true)
    );
  }

  getContainer() {
    return ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
  }

  handleDocumentClick(e) {
    if (
      e &&
      (e.which === 3 || (e.type === "keyup" && e.which !== KEYCODES.TAB))
    )
      return;
    const container = this.getContainer();

    if (
      container.contains(e.target) &&
      container !== e.target &&
      (e.type !== "keyup" || e.which === KEYCODES.TAB)
    ) {
      return;
    }

    this.toggle(e);
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const props = omit(this.props, [
      "toggle",
      "disabled",
      "inNavbar",
      "direction"
    ]);

    const {
      className,
      children,
      dropup,
      open,
      group,
      size,
      nav,
      setActiveFromChild,
      active,
      addonType,
      ...attrs
    } = props;

    const direction =
      this.props.direction === "down" && dropup ? "up" : this.props.direction;

    attrs.tag = attrs.tag || (nav ? "li" : "div");

    let subItemIsActive = false;
    if (setActiveFromChild) {
      React.Children.map(
        this.props.children[1].props.children,
        dropdownItem => {
          if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
        }
      );
    }

    const classes = classNames(
      className,
      direction !== "down" && `drop${direction}`,
      nav && active && "active",
      setActiveFromChild && subItemIsActive && "active",
      addonType && `input-group-${addonType}`,
      group && "btn-group",
      !!size && `btn-group-${size}`,
      !group && !addonType && "dropdown",
      open && "show",
      nav && "nav-item"
    );

    const toggle = this.toggle;

    return (
      <DropdownContext.Provider value={{ toggle, open, direction, nav }}>
        <Manager {...attrs}>
          <DropdownContext.Consumer>
            {() => <div className={classes}>{children}</div>}
          </DropdownContext.Consumer>
        </Manager>
      </DropdownContext.Provider>
    );
  }
}

Dropdown.propTypes = {
  /**
   * Whether it is open, or not.
   */
  open: PropTypes.bool,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * The toggle function.
   */
  toggle: PropTypes.func,
  /**
   * Whether it is located inside a navbar, or not.
   */
  inNavbar: PropTypes.bool,
  /**
   * Whether it is a drop-up, or not.
   */
  dropup: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.string,
  /**
   * Whether it is located inside a Nav, or not.
   */
  nav: PropTypes.bool,
  /**
   * The direction.
   */
  direction: PropTypes.oneOf(["up", "down", "left", "right"])
};

Dropdown.defaultProps = {
  open: false,
  direction: "down",
  nav: false
};

export default Dropdown;
