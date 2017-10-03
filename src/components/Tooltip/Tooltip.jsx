import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import Text from '../Typography/Text/Text'
import Box from '../Box/Box'

import styles from './Tooltip.modules.scss'

/**
 * Provide more detailed instructions.
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  toggleBubble = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  renderBubble(id, direction, children) {
    const bubbleClasses = joinClassNames(
      styles[direction],
      this.state.open ? styles.showBubble : styles.hideBubble
    )

    const ariaHidden = this.state.open ? 'false' : 'true'

    return (
      <div className={bubbleClasses} id={id} role="tooltip" aria-hidden={ariaHidden}>
        <Box spacing="padding" vertical={2} horizontal={3}>
          <Text size="small">{children}</Text>
        </Box>
      </div>
    )
  }

  render() {
    const {id, direction, children, ...rest} = this.props

    return (
      <div {...safeRest(rest)} className={styles.wrapper}>
        {this.renderBubble(id, direction, children)}

        <button
          className={styles.trigger}
          onClick={this.toggleBubble}
          aria-haspopup="true"
          aria-expanded={this.state.open ? 'true' : 'false'}
          aria-labelledby={id}
        >
          <DecorativeIcon symbol="questionMarkCircle" />
        </button>
      </div>
    )
  }
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  /**
   * The content.
   */
  children: PropTypes.node.isRequired,
}

Tooltip.defaultProps = {
  direction: 'right',
  bubble: undefined,
}

export default Tooltip