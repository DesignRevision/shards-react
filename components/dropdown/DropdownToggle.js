import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import classNames from 'classnames';
import { Button } from '../button';

import { DropdownContext } from './DropdownContext';

export const DropdownToggle = ({
  className,
  theme,
  caret,
  split,
  nav,
  tag: Tag,
  ...attrs
}) => {
  const {open, toggle} = useContext(DropdownContext);

  if (!Tag) {
    if (nav) {
      Tag = 'a';
      attrs.href = '#';
    } else {
      Tag = Button;
      attrs.theme = theme
    }
  }

  return (
    <Reference>
      {() => (
        <Tag
          {...attrs}
          className={
            classNames(
              className,
              (caret || split) && 'dropdown-toggle',
              split && 'dropdown-toggle-split',
              nav && 'nav-link'
            )
          }
          onClick={e => {
            if (attrs.disabled) {
              e.preventDefault();
              return;
            }

            if (nav && !Tag) {
              e.preventDefault();
            }

            if (attrs.onClick) {
              attrs.onClick(e);
            }

            toggle(e);
          }}
          aria-expanded={open}
        >
          {
            attrs.children || (
              <span className="sr-only">{
                attrs[ 'aria-label' ] || 'Toggle Dropdown'
              }</span>
            )
          }
        </Tag>
      )}
    </Reference>
  );
};

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
  'aria-haspopup': PropTypes.bool,
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
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

DropdownToggle.defaultProps = {
  'aria-haspopup': true,
  theme: 'primary'
};
