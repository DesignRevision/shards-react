import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class NavLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === "#") {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      active,
      disabled,
      tag: Tag,
      innerRef,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "nav-link",
      disabled && "disabled",
      active && "active"
    );

    return (
      <Tag
        {...attrs}
        ref={innerRef}
        onClick={this.handleOnClick}
        className={classes}
      />
    );
  }
}

NavLink.propTypes = {
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The function that should be triggered on click.
   */
  onClick: PropTypes.func,
  /**
   * The href attribute value.
   */
  href: PropTypes.any,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ])
};

NavLink.defaultProps = {
  tag: "a"
};

export default NavLink;
