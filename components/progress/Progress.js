import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import toNumber from "lodash.tonumber";

/**
 * You can use the `Progress` component to display simple or complex progress bars.
 */
const Progress = props => {
  const {
    children,
    className,
    barClassName,
    value,
    max,
    animated,
    striped,
    theme,
    bar,
    multi,
    tag: Tag,
    ...attrs
  } = props;

  const percent = (toNumber(value) / toNumber(max)) * 100;
  const progressClasses = classNames(className, "progress");
  const progressBarClasses = classNames(
    "progress-bar",
    bar ? className || barClassName : barClassName,
    animated && "progress-bar-animated",
    theme && `bg-${theme}`,
    (striped || animated) && "progress-bar-striped"
  );

  const ProgressBar = multi ? (
    children
  ) : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      {children}
    </div>
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <Tag {...attrs} className={progressClasses}>
      {ProgressBar}
    </Tag>
  );
};

Progress.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * Whether it is a bar, or not.
   */
  bar: PropTypes.bool,
  /**
   * Whether there are multiple progress bars nested, or not.
   */
  multi: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.string,
  /**
   * Whether it is animated, or not.
   */
  animated: PropTypes.bool,
  /**
   * Whether it is striped, or not.
   */
  striped: PropTypes.bool,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The class name for the bar element.
   */
  barClassName: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The max value.
   */
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Progress.defaultProps = {
  tag: "div",
  value: 0,
  max: 100,
  theme: "primary"
};

export default Progress;
