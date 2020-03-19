import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const BreadcrumbItem = ({
   className,
   active,
   tag: Tag,
   ...attrs
}) => (
  <Tag
    {...attrs}
    className={classNames(className, active && 'active', 'breadcrumb-item')}
    aria-current={active ? 'page' : undefined}
  />
);

BreadcrumbItem.propTypes = {
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

BreadcrumbItem.defaultProps = {
  tag: 'li'
};
