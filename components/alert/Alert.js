import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Fade from '../fade';

/**
 * The alert component can be used to display contextual user messages.
 */
export const Alert = ({
  className,
  closeClassName,
  closeAriaLabel,
  tag: Tag,
  theme,
  open,
  dismissible,
  children,
  transition,
  fade,
  ...attrs
}) => (
  <Fade
    {...{
      ...attrs,
      ...Fade.defaultProps,
      ...transition,
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0,
      tag: Tag,
      className: classNames(
        className,
        'alert',
        `alert-${theme}`,
        dismissible && 'alert-dismissible'
      ),
      in: open,
      role: 'alert',
    }}
  >
    {dismissible ? (
      <button
        type="button"
        className={classNames('close', closeClassName)}
        aria-label={closeAriaLabel}
        onClick={dismissible}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    ) : null}
    {children}
  </Fade>
);

Alert.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The close button's class name.
   */
  closeClassName: PropTypes.string,
  /**
   * The close button's aria label.
   */
  closeAriaLabel: PropTypes.string,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * Whether it should fade, or not.
   */
  fade: PropTypes.bool,
  /**
   * Whether is open, or not.
   */
  open: PropTypes.bool,
  /**
   * Whether is dismissible, or not.
   */
  dismissible: PropTypes.func,
  /**
   * The transition config. See `Fade` component for more details.
   */
  transition: PropTypes.shape(Fade.propTypes),
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

Alert.defaultProps = {
  theme: 'primary',
  open: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true
  }
};
