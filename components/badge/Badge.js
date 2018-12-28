import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Badges are really great for labels and count values.
 */
const Badge = props => {
  let { tag: Tag, className, theme, pill, outline, ...attrs } = props;

  const classes = classNames(
    className,
    "badge",
    theme && !outline && `badge-${theme}`,
    outline && `badge-outline-${theme}`,
    pill && "badge-pill"
  );

  Tag = attrs.href && Tag === "span" ? "a" : Tag;

  return <Tag {...attrs} className={classes} />;
};

Badge.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * Whether it should be outlined, or not.
   */
  outline: PropTypes.bool,
  /**
   * Whether it should be a pill, or not.
   */
  pill: PropTypes.bool,
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Badge.defaultProps = {
  theme: "primary",
  pill: false,
  outline: false,
  tag: "span"
};

export default Badge;
