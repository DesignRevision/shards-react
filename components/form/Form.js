import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Examples and usage guidelines for form controls.
 */
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.getRef = this.getRef.bind(this);
    this.submit = this.submit.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  submit() {
    if (this.ref) {
      this.ref.submit();
    }
  }

  render() {
    const { className, tag: Tag, inline, innerRef, ...attrs } = this.props;
    const classes = classNames(className, inline && "form-inline");

    return <Tag {...attrs} ref={innerRef} className={classes} />;
  }
}

Form.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is inline, or not.
   */
  inline: PropTypes.bool,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Form.defaultProps = {
  tag: "form"
};

export default Form;
