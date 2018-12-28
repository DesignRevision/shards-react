import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import pick from "lodash.pick";
import omit from "lodash.omit";

import { TIMEOUT, TRANSITION_KEYS, TRANSITION_CLASS_MAP } from "../constants";
import { reflow, getNodeHeight } from "../utils";

/**
 * The `Collapse` component allows you to easily toggle the visibility of your content.
 */
class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null
    };
  }

  render() {
    const {
      tag: Tag,
      open,
      className,
      navbar,
      children,
      innerRef,
      ...attrs
    } = this.props;

    const { height } = this.state;
    const transitionProps = pick(attrs, TRANSITION_KEYS);
    const childProps = omit(attrs, TRANSITION_KEYS);

    return (
      <Transition
        {...transitionProps}
        in={open}
        onEntering={this.onEntering.bind(this)}
        onEntered={this.onEntered.bind(this)}
        onExit={this.onExit.bind(this)}
        onExiting={this.onExiting.bind(this)}
        onExited={this.onExited.bind(this)}
      >
        {status => {
          const style = {
            height: height || null,
            display: status !== "exited" && "block"
          };

          const classes = classNames(
            className,
            TRANSITION_CLASS_MAP[status] || "collapse",
            navbar && "navbar-collapse"
          );

          return (
            <Tag
              {...childProps}
              style={{ ...childProps.style, ...style }}
              className={classes}
              ref={innerRef}
            >
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }

  onEntering(node, isAppearing) {
    this.setState({ height: getNodeHeight(node) });
    this.props.onEntering(node, isAppearing);
  }

  onEntered(node, isAppearing) {
    this.setState({ height: null });
    this.props.onEntered(node, isAppearing);
  }

  onExit(node) {
    this.setState({ height: getNodeHeight(node) });
    this.props.onExit(node);
  }

  onExiting(node) {
    reflow(node);
    this.setState({ height: 0 });
    this.props.onExiting(node);
  }

  onExited(node) {
    this.setState({ height: null });
    this.props.onExited(node);
  }
}

Collapse.propTypes = {
  ...Transition.propTypes,
  /**
   * Whether it is open, or not.
   */
  open: PropTypes.bool,
  /**
   * The children components.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The element tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * The class name.
   */
  className: PropTypes.node,
  /**
   * Whether it is located inside a navbar, or not.
   */
  navbar: PropTypes.bool,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
};

Collapse.defaultProps = {
  ...Transition.defaultProps,
  open: false,
  appear: false,
  enter: true,
  exit: true,
  tag: "div",
  timeout: TIMEOUT.COLLAPSE
};

export default Collapse;
