import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';

import { DropdownContext } from './DropdownContext';
import { DROPDOWN_POSITION_MAP } from '../constants';

export const DropdownMenu = ({
  className,
  children,
  right,
  tag: Tag,
  flip,
  small,
  modifiers,
  persist,
  ...attrs
}) => {
  const { direction, nav, open } = useContext(DropdownContext);
  if (persist || (open && !nav)) {
    const pos1 =
      DROPDOWN_POSITION_MAP[ direction.toUpperCase() ] || 'bottom';
    const pos2 = right ? 'end' : 'start';
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
        {({ref, placement}) => (
          <div
            ref={ref}
            className={
              classNames(
                className,
                'dropdown-menu',
                small && 'dropdown-menu-small',
                right && 'dropdown-menu-right',
                open && 'show'
              )
            }
            x-placement={placement}
            aria-hidden={!open}
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
    <Tag
      tabIndex="-1"
      role="menu"
      {...attrs}
      className={
        classNames(
          className,
          'dropdown-menu',
          small && 'dropdown-menu-small',
          right && 'dropdown-menu-right',
          open && 'show'
        )
      }>
      {children}
    </Tag>
  );
};

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
  tag: 'div',
  flip: true
};
