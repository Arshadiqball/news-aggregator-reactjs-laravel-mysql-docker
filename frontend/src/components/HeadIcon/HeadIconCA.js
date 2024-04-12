import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from './HeadIconTypes'
// Styles
import './HeadIconCA.scss'
import './HeadIconCA_color.scss'
// Helpers
export default class HeadIcon extends Component {
  render () {
    const {
      type, onClick,
      // tooltip,
      className, style,
    } = this.props
    if (!type || !types[type]) {
      return ''
    }
    const buttonClass = ['ca_headicon']
    className && buttonClass.push(className)

    return (
      <span className={buttonClass.join(' ')} onClick={onClick} style={style}>
        {types[type]}
      </span>
    )
  }
}

HeadIcon.propTypes = {
  className: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object,
  // tooltip: PropTypes.any,
  type: PropTypes.any,
}
