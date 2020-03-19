import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CardDeck = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(className, 'card-deck')}/>
);

CardDeck.propTypes = {
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ]),
  /**
   * The class name.
   */
  className: PropTypes.string
};

CardDeck.defaultProps = {
  tag: 'div'
};
