import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";

/**
 * The `FormCheckbox` component is a wrapper over Bootstrap's [custom checkbox component](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios-1).
 */
class FormCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  render() {
    const {
      className,
      children,
      inline,
      valid,
      invalid,
      innerRef,
      toggle,
      small,
      id: _id,
      ...attrs
    } = this.props;

    const labelClasses = classNames(
      className,
      "custom-control",
      !toggle ? "custom-checkbox" : "custom-toggle",
      toggle && small && "custom-toggle-sm",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const inputClasses = classNames(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const id = _id || `dr-checkbox-${shortid.generate()}`;

    return (
      <label className={labelClasses}>
        <input
          {...attrs}
          ref={innerRef}
          id={id}
          type="checkbox"
          className={inputClasses}
        />
        <label id={id} className="custom-control-label" aria-hidden="true" onClick={this.props.onChange} />
        <span className="custom-control-description">{children}</span>
      </label>
    );
  }
}

FormCheckbox.defaultProps = {
  onChange: () => {}
}

FormCheckbox.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * Whether it is inline, or not.
   */
  inline: PropTypes.bool,
  /**
   * Whether it is valid, or not.
   */
  valid: PropTypes.bool,
  /**
   * Whether it is invalid, or not.
   */
  invalid: PropTypes.bool,
  /**
   * Whether it is a toggle button, or not.
   */
  toggle: PropTypes.bool,
  /**
   * Whether it is small (toggle), or not.
   */
  small: PropTypes.bool,
  /**
   * The onChange handler.
   */
  onChange: PropTypes.func,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

export default FormCheckbox;
