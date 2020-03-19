import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager } from 'react-popper';
import omit from 'lodash.omit';

import { DropdownContext } from './DropdownContext';
import { EVENTS, KEYCODES } from './../constants';

/**
 * You can use dropdowns to display accessible contextual overlays for displaying lists of links and more.
 */
export const Dropdown = ({
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
}) => {
  const ref = useRef();
  const toggle = e => {
    if (attrs.disabled) {
      return e && e.preventDefault();
    }

    return attrs.toggle(e);
  };
  useEffect(() => {
    const handleDocumentClick = e => {
      if (
        e &&
        (e.which === 3 || (e.type === 'keyup' && e.which !== KEYCODES.TAB))
      )
        return;

      if (
        ref.current &&
        ref.current.contains(e.target) &&
        ref.current !== e.target &&
        (e.type !== 'keyup' || e.which === KEYCODES.TAB)
      ) {
        return;
      }

      toggle(e);
    };

    if (open) {
      EVENTS.CLICK.forEach(e =>
        document.addEventListener(e, handleDocumentClick, true)
      );
    }

    return () => EVENTS.CLICK.forEach(e =>
      document.removeEventListener(e, handleDocumentClick, true)
    );
  }, [open, ref]);

  let subItemIsActive = false;
  if (setActiveFromChild) {
    React.Children.map(
      children[ 1 ].props.children,
      dropdownItem => {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      }
    );
  }

  const direction =
    attrs.direction === 'down' && dropup ? 'up' : attrs.direction;
  attrs.tag = attrs.tag || (nav ? 'li' : 'div');

  return (
    <DropdownContext.Provider value={{toggle, open, direction, nav}}>
      <Manager {...omit(...attrs, [
        'toggle',
        'disabled',
        'inNavbar',
        'direction'
      ])}>
        <DropdownContext.Consumer>
          {() => <div className={
            classNames(
              className,
              direction !== 'down' && `drop${direction}`,
              nav && active && 'active',
              setActiveFromChild && subItemIsActive && 'active',
              addonType && `input-group-${addonType}`,
              group && 'btn-group',
              !!size && `btn-group-${size}`,
              !group && !addonType && 'dropdown',
              open && 'show',
              nav && 'nav-item'
            )
          }>{children}</div>}
        </DropdownContext.Consumer>
      </Manager>
    </DropdownContext.Provider>
  );
};

Dropdown.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * Whether it is open, or not.
   */
  open: PropTypes.bool,
  /**
   * Whether it is active from child, or not.
   */
  setActiveFromChild: PropTypes.bool,
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * Whether it is grouped, or not.
   */
  group: PropTypes.bool,
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
   * The component's addon type.
   */
  addonType: PropTypes.string,
  /**
   * Whether it is located inside a Nav, or not.
   */
  nav: PropTypes.bool,
  /**
   * The direction.
   */
  direction: PropTypes.oneOf([ 'up', 'down', 'left', 'right' ])
};

Dropdown.defaultProps = {
  open: false,
  direction: 'down',
  nav: false
};
