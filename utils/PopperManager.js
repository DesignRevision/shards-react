import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Popper } from 'react-popper'
import classNames from 'classnames'

import { getTarget, CustomPropTypes } from '../components/utils'

class PopperManager extends React.Component {
  constructor(props) {
    super(props)

    this.handlePlacementChange = this.handlePlacementChange.bind(this)
    this.setTargetNode = this.setTargetNode.bind(this)
    this.getReferenceElement = this.getReferenceElement.bind(this)

    this._element = null
    this.state = {
      placement: null
    }
  }

  componentDidUpdate() {
    if (
      this._element &&
      this._element.childNodes &&
      this._element.childNodes[0] &&
      this._element.childNodes[0].focus
    ) {
      this._element.childNodes[0].focus()
    }
  }

  setTargetNode(node) {
    this.targetNode = node
  }

  getReferenceElement() {
    return this.targetNode
  }

  getContainerNode() {
    return getTarget(this.props.container)
  }

  handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement })
    }
    return data
  }

  renderChildren() {
    const {
      children,
      open,
      target,
      offset,
      placementPrefix,
      noArrow,
      arrowClassName,
      className,
      container,
      modifiers,
      boundariesElement,
      flip,
      fallbackPlacement,
      tag,
      ...attrs
    } = this.props

    const _placement = this.state.placement || attrs.placement

    const _className = classNames(
      className,
      placementPrefix ? `${placementPrefix}-${_placement}` : _placement
    )

    const _arrowClassName = classNames(
      'arrow',
      arrowClassName
    )

    const _modifiers = {
      offset: {
        offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement
      },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange
      },
      ...modifiers
    }

    return (
      <Popper referenceElement={this.getReferenceElement()}
        modifiers={_modifiers}
        placement={_placement}
        {...attrs}>
        {({ ref, style, placement, arrowProps }) => (
          <div ref={ref} className={_className} style={style} data-placement={placement}>
            {children}
            {!noArrow && <div ref={arrowProps.ref} style={arrowProps.style} className={_arrowClassName} />}
          </div>
        )}
      </Popper>
    )
  }

  render() {
    const {
      target,
      open,
      container
    } = this.props

    this.setTargetNode(getTarget(target))

    if (!open) {
      return null
    }

    if (container === 'inline') {
      return this.renderChildren()
    }

    const containerNode = this.getContainerNode()

    return ReactDOM.createPortal((
      <div>{this.renderChildren()}</div>
    ), containerNode)
  }
}

PopperManager.propTypes = {
  /**
   * The target.
   */
  target: CustomPropTypes.target.isRequired,

  /**
   * The container.
   */
  container: CustomPropTypes.target,

  /**
   * The children.
   */
  children: PropTypes.node.isRequired,

  /**
   * Whether the Popper is open, or not.
   */
  open: PropTypes.bool,

  /**
   * Whether the Popper should flip, or not.
   */
  flip: PropTypes.bool,

  /**
   * The Popper offset.
   */
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * The Popper fallback placement.
   */
  fallbackPlacement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * The Popper placement prefix.
   */
  placementPrefix: PropTypes.string,

  /**
   * The Popper's arrow className.
   */
  arrowClassName: PropTypes.string,

  /**
   * Whether to hide the arrow, or not.
   */
  noArrow: PropTypes.bool,

  /**
   * The Popper class name.
   */
  className: PropTypes.string,

  /**
   * The component tag.
   */
  tag: PropTypes.string,

  /**
   * The modifiers object.
   */
  modifiers: PropTypes.object,

  /**
   * The boundaries element for the Popper instance.
   */
  boundariesElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

PopperManager.defaultProps = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  arrow: true,
  open: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: Object.create(null)
}

export default PopperManager
