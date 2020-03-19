import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
import pick from 'lodash.pick';
import omit from 'lodash.omit';

import { TIMEOUT, TRANSITION_CLASS_MAP, TRANSITION_KEYS } from '../constants';
import { getNodeHeight, reflow } from '../utils';

/**
 * The `Collapse` component allows you to easily toggle the visibility of your content.
 */
export const Collapse = ({
  tag: Tag,
  open,
  className,
  navbar,
  children,
  innerRef,
  ...attrs
}) => {
  const transitionProps = pick(attrs, TRANSITION_KEYS);
  const childProps = omit(attrs, TRANSITION_KEYS);
  const [height, setHeight] = useState(null);

  const onEntering = (node, isAppearing) => {
    setHeight(getNodeHeight(node));
    attrs.onEntering(node, isAppearing);
  };

  const onEntered = (node, isAppearing) => {
    setHeight(null);
    attrs.onEntered(node, isAppearing);
  };

  const onExit = (node) => {
    setHeight(getNodeHeight(node));
    attrs.onExit(node);
  };

  const onExiting = (node) => {
    reflow(node);
    setHeight(0);
    attrs.onExiting(node);
  };

  const onExited = (node) => {
    setHeight(null);
    attrs.onExited(node);
  };

  return (
    <Transition
      {...transitionProps}
      in={open}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {status => {
        const style = {
          height: height || null,
          display: status !== 'exited' && 'block'
        };

        const classes = classNames(
          className,
          TRANSITION_CLASS_MAP[ status ] || 'collapse',
          navbar && 'navbar-collapse'
        );

        return (
          <Tag
            {...childProps}
            style={{...childProps.style, ...style}}
            className={classes}
            ref={innerRef}
          >
            {children}
          </Tag>
        );
      }}
    </Transition>
  )
};

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
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
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
  tag: 'div',
  timeout: TIMEOUT.COLLAPSE
};
