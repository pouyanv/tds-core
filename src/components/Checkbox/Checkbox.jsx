import React from 'react'
import PropTypes from 'prop-types'

import DecorativeIcon from '../Icons/DecorativeIcon/DecorativeIcon'
import Choice from '../Choice/Choice'

import styles from './Checkbox.modules.scss'

const Checkbox = props => (
  <Choice {...props} type="checkbox" inputTypeStyles={styles}>
    {checked => {
      return checked && <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
    }}
  </Choice>
)

Checkbox.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value. Must be unique within the group.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The checked state
   */
  checked: PropTypes.bool,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['error']),
  /**
   * A callback function to be invoked when the checkbox is checked or unchecked.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the checkbox receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the checkbox loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  feedback: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Checkbox
