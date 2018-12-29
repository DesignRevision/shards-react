import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";

class FormRadio extends React.Component {
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
      onChange,
      id: _id,
      ...attrs
    } = this.props;

    const labelClasses = classNames(
      "custom-control",
      "custom-radio",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const inputClasses = classNames(
      className,
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const id = _id || `dr-radio-${shortid.generate()}`;

    return (
      <label className={labelClasses}>
        <input
          {...attrs}
          ref={innerRef}
          id={id}
          type="radio"
          className={inputClasses}
          onChange={onChange}
        />
        <label id={id} className="custom-control-label" aria-hidden="true" onClick={onChange} />
        <span className="custom-control-description">{children}</span>
      </label>
    );
  }
}

FormRadio.defaultProps = {
  onChange: () => {}
};

FormRadio.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children.
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
   * The function that should run on change.
   */
  onChange: PropTypes.func,
  /**
   * Whether it is invalid, or not.
   */
  invalid: PropTypes.bool,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

export default FormRadio;
