import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardBody = props => {
  const { className, tag: Tag, children, ...attrs } = props;
  const classes = classNames(className, "card-body");

  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};

CardBody.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardBody.defaultProps = {
  tag: "div"
};

export default CardBody;
