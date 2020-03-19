import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Form groups allow you to easily add structure to your forms.
 */
export const FormGroup = ({
  className,
  row,
  disabled,
  check,
  inline,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={
    classNames(
      className,
      row && 'row',
      check ? 'form-check' : 'form-group',
      check && inline && 'form-check-inline',
      check && disabled && 'disabled'
    )
  }/>
);

FormGroup.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * Whether it is a row, or not.
   */
  row: PropTypes.bool,
  /**
   * Whether it is a form check, or not.
   */
  check: PropTypes.bool,
  /**
   * Whether it is displayed inline (form check) or not.
   */
  inline: PropTypes.bool,
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * The components' tag type.
   */
  tag: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string
};

FormGroup.defaultProps = {
  tag: 'div'
};
