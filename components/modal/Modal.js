import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Transition } from "react-transition-group";

import { TIMEOUT } from "../constants";

/**
 * Creating flexible modal dialogs can be achieved using the `Modal` component. They feature a series of helpful subcomponents, sizes and various other options that you can use to customize the display and behavior of your modals.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open || false
    };

    this.handleOnEntered = this.handleOnEntered.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.handleOnExited = this.handleOnExited.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);

    this.modalContent = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.props.open) {
      this.setState({ open: this.props.open });
    }
  }

  handleOnEntered(type, node) {
    const { fade, showModal } = this.props;

    if (type === "backdrop" && fade === false) {
      return;
    }

    node.classList.add("show");

    if (type === "modal") {
      showModal && showModal();
    }
  }

  handleOnExit(type, node) {
    const { fade, hideModal } = this.props;

    if (type === "backdrop" && fade === false) {
      return;
    }

    node.classList.remove("show");

    if (type === "modal") {
      hideModal && hideModal();
    }
  }

  handleOnExited() {
    this.props.hiddenModal && this.props.hiddenModal();
  }

  handleBackdropClick(e) {
    if (!this.modalContent.contains(e.target)) {
      this.props.toggle();
    }
  }

  render() {
    if (!this.state.open) {
      return null;
    }

    const {
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
      className
    } = this.props; // open, showModal, hideModal, hiddenModal, toggle

    const backdropClasses = classNames(
      "modal-backdrop",
      fade ? "fade" : "show",
      backdropClassName
    );

    const modalClasses = classNames(
      "modal",
      fade && "fade",
      modalClassName,
      fade &&
        (animation || (position && position.split("-").slice(-1)[0]) || "top")
    );

    const modalAttrs = {
      "aria-hidden": true,
      id: id || undefined,
      tabIndex,
      role,
      style: {
        display: "block"
      }
    };

    const modalDialogClasses = classNames(
      "modal-dialog",
      className,
      size && `modal-${size}`,
      centered && "modal-dialog-centered",
      position && `modal-${position}`
    );

    const contentClasses = classNames("modal-content", modalContentClassName);

    return (
      <Fragment>
        {backdrop && (
          <Transition
            timeout={fade ? TIMEOUT.FADE : 0}
            in={this.state.open}
            appear={this.state.open}
            mountOnEnter
            unmountOnExit
            onEntered={node => this.handleOnEntered("backdrop", node)}
            onExit={node => this.handleOnExit("backdrop", node)}
            onExited={this.handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={fade ? TIMEOUT.FADE : 0}
          in={this.state.open}
          appear={this.state.open}
          mountOnEnter
          unmountOnExit
          onClick={this.handleBackdropClick}
          onEntered={node => this.handleOnEntered("modal", node)}
          onExit={node => this.handleOnExit("modal", node)}
        >
          <div className={modalClasses} {...modalAttrs}>
            <div className={modalDialogClasses} role="document">
              <div
                ref={el => (this.modalContent = el)}
                className={contentClasses}
              >
                {children}
              </div>
            </div>
          </div>
        </Transition>
      </Fragment>
    );
  }
}

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
  role: "dialog"
};

export default Modal;
