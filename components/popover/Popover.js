import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PopperManager from '../../utils/PopperManager';
import { CustomPropTypes, getTarget } from '../utils';
import { EVENTS, TIMEOUT } from '../constants';

/**
 * Popovers are powerful elements similar to tooltips and powered by Popper.js that can be applies to any interactive element.
 */
export const Popover = ({
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
}) => {
  const [_target, setTarget] = useState(setTarget(getTarget(target)));
  const [_hideTimeout, setHideTimeout] = useState(null);
  const [_showTimeout, setShowTimeout] = useState(null);

  const show = () => {
    clearTimeout(_hideTimeout);
    addListeners();

    if (!open) {
      clearTimeout(_showTimeout);
      setShowTimeout(setTimeout(attrs.toggle, getDelay('show')));
    }
  };

  const toggle = event => {
    if (attrs.disabled) {
      event.preventDefault();
      return;
    }

    return attrs.toggle(event);
  };

  const handleClick = event => {
    if (!_target) {
      return;
    }

    if (
      event.target !== _target &&
      !_target.contains(event.target)  //not sure but it's useless IMHO
    ) {
      if (_hideTimeout) {
        clearTimeout(_hideTimeout);
      }

      if (open) {
        toggle(event);
      }
    }
  };

  const getDelay = key => {
    key = key.toUpperCase();
    if (typeof attrs.delay === 'object') {
      return isNaN(attrs.delay[ key ])
        ? TIMEOUT[ key ]
        : attrs.delay[ key ];
    }

    return attrs.delay;
  };

  const hide = () => {
    clearTimeout(_showTimeout);
    removeListeners();

    if (open) {
      clearTimeout(_hideTimeout);
      setHideTimeout(setTimeout(toggle, getDelay('hide')));
    }
  };

  const removeListeners = () => {
    EVENTS.CLICK.forEach(event => {
      document.removeEventListener(event, handleClick, true);
    });
  };

  const addListeners = () => {
    EVENTS.CLICK.forEach(event =>
      document.addEventListener(event, handleClick, true)
    );
  };

  const maybeShow = () => {
    if (open) {
      show();
      return;
    }
    hide();
  };

  useEffect(() => {
    maybeShow();
    return () => {
      clearTimeout(_showTimeout);
      clearTimeout(_hideTimeout);
      removeListeners();
    }
  }, []);

  if (!open) {
    return null;
  }

  return (
    <PopperManager
      className={classNames('popover', 'show', className)}
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
      <div {...attrs} className={classNames('popover-inner', innerClassName)}/>
    </PopperManager>
  );
};

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
  boundariesElement: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),

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
  offset: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),

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
  placement: 'top',
  placementPrefix: 'bs-popover',
  delay: {
    show: 0,
    hide: 0
  },
  toggle: function () {
  }
};
