import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'
import Icon from '../../Icon/Icon'
import { warn } from '../../../warn'

import styles from './ChevronLink.modules.scss'

const getClassName = (variant) => {
  switch (variant) {
    case 'secondary':
      return styles.secondary
    case 'inverted':
      return styles.inverted
    default:
      return styles.primary
  }
}

const getIcon = (glyph, className) => (
  <span className={className}>
    <Icon glyph={glyph} aria-hidden="true" />
  </span>
)

/**
 * A Call to Action link.
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const ChevronLink = ({ reactRouterLinkComponent, variant, direction, children, ...rest }) => {
  if (!(reactRouterLinkComponent && rest.to)) {
    warn('Chevron Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return React.createElement(

    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant)
    },
    direction === 'left' ? getIcon('left-chevron', styles.leftChevron) : undefined,
    children,
    direction === 'right' ? getIcon('chevron', styles.rightChevron) : undefined
  )
}

ChevronLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted'
  ]),
  /**
   * The chevron's direction and placement.
   */
  direction: PropTypes.oneOf([
    'left',
    'right'
  ]),
  /**
   * The label.
   */
  children: PropTypes.node.isRequired,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.string,
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func
}
ChevronLink.defaultProps = {
  variant: 'primary',
  direction: 'right',
  to: null,
  reactRouterLinkComponent: null
}
ChevronLink.displayName = 'Link.Chevron'

export default ChevronLink