import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { TIMEOUT } from '../constants';

/**
 * Creating flexible modal dialogs can be achieved using the `Modal` component. They feature a series of helpful subcomponents, sizes and various other options that you can use to customize the display and behavior of your modals.
 */
export const Modal = ({
  id,
  backdrop,
  fade,
  tabIndex,
  backdropClassName,
  modalClassName,
  animation,
  modalContentClassName,
  position,
  role,
  size,
  children,
  centered,
  className,
  ...attrs
}) => {
  const ref = useRef();
  const handleOnEntered = (type, node) => {
    if (type === 'backdrop' && fade === false) {
      return;
    }

    node.classList.add('show');

    if (type === 'modal') {
      attrs.showModal && attrs.showModal();
    }
  };

  const handleOnExit = (type, node) => {
    if (type === 'backdrop' && fade === false) {
      return;
    }

    node.classList.remove('show');

    if (type === 'modal') {
      attrs.hideModal && attrs.hideModal();
    }
  };

  const handleOnExited = () => {
    attrs.hiddenModal && attrs.hiddenModal();
  };

  const handleBackdropClick = (e) => {
    if (!ref.current.contains(e.target)) {
      attrs.toggle();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <Fragment ref={ref}>
      {backdrop && (
        <Transition
          timeout={fade ? TIMEOUT.FADE : 0}
          in={open}
          appear={open}
          mountOnEnter
          unmountOnExit
          onEntered={node => handleOnEntered('backdrop', node)}
          onExit={node => handleOnExit('backdrop', node)}
          onExited={handleOnExited}
        >
          <div className={
            classNames(
              'modal-backdrop',
              fade ? 'fade' : 'show',
              backdropClassName
            )
          }/>
        </Transition>
      )}
      <Transition
        timeout={fade ? TIMEOUT.FADE : 0}
        in={open}
        appear={open}
        mountOnEnter
        unmountOnExit
        onClick={handleBackdropClick}
        onEntered={node => handleOnEntered('modal', node)}
        onExit={node => handleOnExit('modal', node)}
      >
        <div
          className={
            classNames(
              'modal',
              fade && 'fade',
              modalClassName,
              fade &&
              (animation || (position && position.split('-').slice(-1)[ 0 ]) || 'top')
            )
          }
          {...{
            'aria-hidden': true,
            id: id || undefined,
            tabIndex,
            role,
            style: {
              display: 'block'
            }
          }}
        >
          <div
            className={
              classNames(
                'modal-dialog',
                className,
                size && `modal-${size}`,
                centered && 'modal-dialog-centered',
                position && `modal-${position}`
              )
            }
            role="document">
            <div
              ref={ref}
              className={classNames('modal-content', modalContentClassName)}
            >
              {children}
            </div>
          </div>
        </div>
      </Transition>
    </Fragment>
  );
};

Modal.propTypes = {
  /**
   * The id.
   */
  id: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is open, or not.
   */
  open: PropTypes.bool,
  /**
   * Whether it should fade, or not.
   */
  fade: PropTypes.bool,
  /**
   * Whether it should display a backdrop, or not.
   */
  backdrop: PropTypes.bool,
  /**
   * The function that should be triggered when the modal is shown.
   */
  showModal: PropTypes.func,
  /**
   * The function that should be triggered when the modal is set to hide.
   */
  hideModal: PropTypes.func,
  /**
   * The function that should be triggered when the modal is finally hidden.
   */
  hiddenModal: PropTypes.func,
  /**
   * Whether it should be centered, or not.
   */
  centered: PropTypes.bool,
  /**
   * The class name for the backdrop element.
   */
  backdropClassName: PropTypes.string,
  /**
   * The toggle function.
   */
  toggle: PropTypes.func,
  /**
   * The class name for the modal.
   */
  modalClassName: PropTypes.string,
  /**
   *
   */
  animation: PropTypes.bool,
  /**
   * The position.
   */
  position: PropTypes.string,
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * The tab index.
   */
  tabIndex: PropTypes.string,
  /**
   * The class name for the modal content.
   */
  modalContentClassName: PropTypes.string,
  /**
   * The role attribute for the modal.
   */
  role: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Modal.defaultProps = {
  open: false,
  fade: true,
  backdrop: true,
  role: 'dialog'
};
