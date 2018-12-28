import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const Row = (props) => {
  const {
    noGutters,
    form,
    className,
    tag: Tag,
    ...attrs
  } = props

  const classes = classNames(
    className,
    noGutters ? 'no-gutters' : null,
    form ? 'form-row' : 'row'
  )

  return (<Tag {...attrs} className={classes} />)
}

Row.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it has gutters, or not.
   */
  noGutters: PropTypes.bool,
  /**
   * Whether it is located inside a form, or not.
   */
  form: PropTypes.bool,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ])
}

Row.defaultProps = {
  tag: 'div'
}

export default Row
