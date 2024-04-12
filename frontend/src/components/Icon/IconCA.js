import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from './IconTypes'
// Styles
import './component_color.scss'
import ComponentStyle from './component.scss'
// Helpers
import { classes } from './../../assets/utils/helper'
export default class IconCA extends Component {
  render () {
    const {
      type, onClick,
      // tooltip,
      className, style, size, disabled,
    } = this.props
    if (!type || !types[type]) {
      return ''
    }
    const buttonClass = ['ca_icon']
    size && size.toString() === '1' && buttonClass.push('size1')
    size && size.toString() === '2' && buttonClass.push('size2')
    size && size.toString() === '3' && buttonClass.push('size3')
    onClick && buttonClass.push('clickable')
    className && buttonClass.push(className)

    return (
      <span className={classes(ComponentStyle, buttonClass.join(' '), 'ca_icon')} onClick={!disabled && onClick} style={style}>
        {types[type]}
      </span>
    )
  }
}

IconCA.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  // tooltip: PropTypes.any,
  size: PropTypes.any,
  type: PropTypes.any,
  disabled: PropTypes.bool,
}
