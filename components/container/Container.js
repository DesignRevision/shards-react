import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
 * Shards React provides support for all native Bootstrap 4 layout elements including **containers**, **rows**, **columns** and **form rows** so you can use its full power while building your project's responsive layout powered by flexbox.
 */
export const Container = ({
  className,
  fluid,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={
    classNames(
      className,
      fluid ? 'container-fluid' : 'container'
    )
  }/>
);

Container.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is fluid, or not.
   */
  fluid: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

Container.defaultProps = {
  tag: 'div'
};
