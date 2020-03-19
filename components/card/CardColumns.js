import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardColumns = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, "card-columns")} />
);

CardColumns.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardColumns.defaultProps = {
  tag: "div"
};
