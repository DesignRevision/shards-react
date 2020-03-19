import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';

import { DropdownContext } from './DropdownContext';

export const DropdownItem = ({
  className,
  divider,
  tag: Tag,
  header,
  active,
  ...attrs
}) => {
  if (Tag === 'button') {
    if (header) {
      Tag = 'h6';
    } else if (divider) {
      Tag = 'div';
    } else if (attrs.href) {
      Tag = 'a';
    }
  }
  const { toggle } = useContext(DropdownContext);

  return (
    <Tag
      type={
        Tag === 'button' && (attrs.onClick || attrs.toggle)
          ? 'button'
          : undefined
      }
      {...omit(
        ...attrs,
        [ 'toggle' ]
      )}
      tabIndex={(attrs.disabled || header || divider) ? '-1' : '0'}
      className={
        classNames(
          className,
          attrs.disabled && 'disabled',
          !divider && !header && 'dropdown-item',
          header && 'dropdown-header',
          divider && 'dropdown-divider',
          active && 'active'
        )
      }
      onClick={e => {
        if (attrs.disabled || header || divider) {
          e.preventDefault();
          return;
        }

        if (attrs.onClick) {
          attrs.onClick(e);
        }

        if (attrs.toggle) {
          toggle(e);
        }
      }}
    />
  );
};

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
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

DropdownItem.defaultProps = {
  tag: 'button',
  toggle: true
};
