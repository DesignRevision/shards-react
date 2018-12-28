import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Buttons are Bootstrap's core component for triggering various actions. In Shards, they're very flxible, support multiple sizes, styles, states and many more.
 */
class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      theme,
      size,
      pill,
      outline,
      squared,
      active,
      disabled,
      innerRef,
      tag: Tag,
      block,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "btn",
      theme && `btn-${outline ? "outline-" : ""}${theme}`,
      size && `btn-${size}`,
      pill && "btn-pill",
      squared && "btn-squared",
      block && "btn-block",
      active && "active"
    );

    Tag = attrs.href && Tag === "button" ? "a" : Tag;
    const tagType = Tag === "button" && attrs.onClick ? "button" : undefined;

    return (
      <Tag
        ref={innerRef}
        type={tagType}
        {...attrs}
        className={classes}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * Whether it is outline, or not.
   */
  outline: PropTypes.bool,
  /**
   * Whether it is pill, or not.
   */
  pill: PropTypes.bool,
  /**
   * Whether it is squared, or not.
   */
  squared: PropTypes.bool,
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * Whether it should be displayed as a block (full-width), or not.
   */
  block: PropTypes.bool,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * The inner ref.
   * @type {[type]}
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

Button.defaultProps = {
  theme: "primary",
  tag: "button"
};

export default Button;
