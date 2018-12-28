import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import PopperManager from "../../utils/PopperManager";
import { CustomPropTypes, getTarget } from "../utils";
import { EVENTS, TIMEOUT } from "../constants";

/**
 * Popovers are powerful elements similar to tooltips and powered by Popper.js that can be applies to any interactive element.
 */
class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.maybeShow = this.maybeShow.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getDelay = this.getDelay.bind(this);

    this._target = null;
    this._hideTimeout = null;
    this._showTimeout = null;
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.maybeShow();
  }

  componentDidUpdate() {
    this.maybeShow();
  }

  componentWillUnmount() {
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    this.removeListeners();
  }

  show() {
    clearTimeout(this._hideTimeout);
    this.addListeners();

    if (!this.props.open) {
      clearTimeout(this._showTimeout);
      this._showTimeout = setTimeout(this.toggle, this.getDelay("show"));
    }
  }

  hide() {
    clearTimeout(this._showTimeout);
    this.removeListeners();

    if (this.props.open) {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = setTimeout(this.toggle, this.getDelay("hide"));
    }
  }

  maybeShow() {
    if (this.props.open) {
      this.show();
      return;
    }

    this.hide();
  }

  toggle(event) {
    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    return this.props.toggle(event);
  }

  addListeners() {
    EVENTS.CLICK.forEach(event =>
      document.addEventListener(event, this.handleClick, true)
    );
  }

  removeListeners() {
    EVENTS.CLICK.forEach(event => {
      document.removeEventListener(event, this.handleClick, true);
    });
  }

  handleClick(event) {
    if (!this._target) {
      return;
    }

    if (
      event.target !== this._target &&
      !this._target.contains(event.target) &&
      event.target !== this._popover &&
      !(this._popover && this._popover.contains(event.target))
    ) {
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout);
      }

      if (this.props.open) {
        this.toggle(event);
      }
    }
  }

  getDelay(key) {
    key = key.toUpperCase();
    if (typeof this.props.delay === "object") {
      return isNaN(this.props.delay[key])
        ? TIMEOUT[key]
        : this.props.delay[key];
    }

    return this.props.delay;
  }

  render() {
    const {
      className,
      target,
      container,
      modifiers,
      open,
      innerClassName,
      noArrow,
      arrowClassName,
      placement,
      placementPrefix,
      boundariesElement,
      offset,
      ...attrs
    } = this.props; // disabled, toggle, delay

    if (!open) {
      return null;
    }

    const classes = classNames("popover-inner", innerClassName);
    const popperClasses = classNames("popover", "show", className);

    return (
      <PopperManager
        className={popperClasses}
        target={target}
        container={container}
        modifiers={modifiers}
        offset={offset}
        open={open}
        noArrow={noArrow}
        arrowClassName={arrowClassName}
        placement={placement}
        placementPrefix={placementPrefix}
        boundariesElement={boundariesElement}
      >
        <div {...attrs} className={classes} />
      </PopperManager>
    );
  }
}

Popover.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,

  /**
   * The target element.
   */
  target: CustomPropTypes.target.isRequired,

  /**
   * The popover container.
   */
  container: CustomPropTypes.target,

  /**
   * Popper modifiers object.
   */
  modifiers: PropTypes.object,

  /**
   * Whether the popover is open, or not.
   */
  open: PropTypes.bool,

  /**
   * The inner class name.
   */
  innerClassName: PropTypes.string,

  /**
   * Whether the popover is disabled, or not.
   */
  disabled: PropTypes.bool,

  /**
   * Whether to hide the arrow, or not.
   */
  noArrow: PropTypes.bool,

  /**
   * The arrow class name.
   */
  arrowClassName: PropTypes.string,

  /**
   * The boundaries element for the Popover instance.
   */
  boundariesElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The popover placement.
   */
  placement: PropTypes.string,

  /**
   * The placement prefix.
   */
  placementPrefix: PropTypes.string,

  /**
   * The popover offset.
   */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The toggle function.
   */
  toggle: PropTypes.func.isRequired,

  /**
   * The show/hide delay in ms.
   */
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number
    })
  ])
};

Popover.defaultProps = {
  open: false,
  noArrow: false,
  placement: "top",
  placementPrefix: "bs-popover",
  delay: {
    show: 0,
    hide: 0
  },
  toggle: function() {}
};

export default Popover;
