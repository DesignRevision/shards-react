import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Cards provide a flexible content container that you can use to display a variety of content using contextual background colors, headers and footers.
 */
export const Card = ({
  className,
  innerRef,
  tag: Tag,
  theme,
  outline,
  small,
  ...attrs
}) => (
  <Tag
    {...attrs}
    className={
      classNames(
        className,
        'card',
        small && 'card-small',
        theme && `${outline ? 'border' : 'bg'}-${theme}`
      )
    }
    ref={innerRef}/>
);

Card.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * Whether it is outline, or not.
   */
  outline: PropTypes.bool,
  /**
   * The component tag.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  /**
   * Whether the card is small, or not.
   */
  small: PropTypes.bool,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

Card.defaultProps = {
  tag: 'div'
};
