import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * List groups allow you to display series of content.
 */
export const ListGroup = ({
  className,
  tag: Tag,
  flush,
  small,
  ...attrs
}) => (
  <Tag
    {...attrs}
    className={
      classNames(
        className,
        'list-group',
        small && 'list-group-sm',
        flush && 'list-group-flush'
      )
    }/>
);

ListGroup.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether the list group should be flushed, or not.
   */
  flush: PropTypes.bool,
  /**
   * Whether the list group is small, or not.
   */
  small: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
};

ListGroup.defaultProps = {
  tag: 'ul'
};
