import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { isNumeric, randId } from './../../assets/utils/helper'
import { HeadIcon } from './../../components/HeadIcon'
import { Icon } from './../../components/Icon'
import './styles.scss'

export const TOASTER_ICON_TYPE_SMALL = 'SmallIcon'
export const TOASTER_ICON_TYPE_HEAD = 'HeadIcon'

export const toastVariants = {
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
  secondary: 'secondary',
}

const maxToasts = 4

const stopAutomaticRemoval = (t) => {
  if (t._timeoutRef) {
    clearTimeout(t._timeoutRef)
    t._timeoutRef = null
  }
}

const setAutomaticRemoval = (t) => {
  stopAutomaticRemoval(t)
  if (!t.persist) {
    if (t.isDownloading) {
      t._timeoutRef = setTimeout(() => {
        removeToast(t.id)
      }, 0)
    } else {
      t._timeoutRef = setTimeout(() => {
        removeToast(t.id)
      }, t.timeout || 5000)
    }
  }
}

export const toastWarning = function (t) {
  if (!t.icon) {
    t.icon = 'warning'
  }
  if (!t.title) {
    t.title = "Note"
  }
  return toast(t, toastVariants.warning)
}

export const toastError = function (t) {
  if (!t.icon) {
    t.icon = 'warning'
  }
  if (!t.title) {
    t.title = `Error${t.code == null ? '' : ' ' + t.code}`
  }
  if (isNumeric(t.code) && !t.message) {
    t.message = "Something Unexpected Happened"
  }
  return toast(t, toastVariants.danger)
}

export const toastSuccess = function (t) {
  if (!t.icon) {
    t.icon = 'yes'
  }
  if (!t.title && t.title !== false) {
    t.title = "Success"
  }
  return toast(t, toastVariants.success)
}

export const toastInfo = function (t) {
  if (!t.icon) {
    t.icon = 'notes'
  }
  if (!t.title && t.title !== false) {
    t.title = "Info"
  }
  return toast(t, toastVariants.info)
}

export const toastMuted = function (t) {
  if (!t.icon) {
    t.icon = 'ban'
  }
  return toast(t, toastVariants.secondary)
}

export let toast = function (t, variant) {
  const { toastsMap } = this.state
  let { toasts } = this.state

  if (!t.id) {
    t.id = randId()
  }
  if (!t.undoLabel) {
    t.undoLabel = 'Undo'
  }
  if (!t.iconType) {
    t.iconType = TOASTER_ICON_TYPE_SMALL
  }

  if (!t.icon) {
    t.icon = 'notes'
  }

  if (!t.variant && variant) {
    t.variant = variant
  }

  if (toastsMap[t.id]) {
    toasts = toasts.filter((ts) => {
      if (ts.id === t.id) {
        stopAutomaticRemoval(ts)
        return false
      }
      return true
    })
    // t.hasChanged = JSON.stringify(toastsMap[t.id]) !== JSON.stringify(t)
    // t._timeoutRef = toastsMap[t.id]._timeoutRef
  }

  while (toasts.length >= maxToasts) {
    const tempToast = toasts.shift()
    stopAutomaticRemoval(tempToast)
    delete toastsMap[tempToast.id]
  }

  toastsMap[t.id] = true
  toasts.push(t)

  setAutomaticRemoval(t)

  if (t.isDownloading) {
    stopAutomaticRemoval(t)
  }

  this.setState({ toasts, toastsMap })

  return t.id
}

export let removeToast = function (id) {
  const { toastsMap, toasts } = this.state
  if (!toastsMap[id]) {
    return
  }

  // add removal animation
  const t = toasts.find((t) => t.id === id)
  if (!t) {
    return
  }
  stopAutomaticRemoval(t) // in case it wasn't automatic

  delete toastsMap[id]
  toasts.splice(
    toasts.findIndex((t) => t.id === id),
    1
  )
  this.setState({ toasts, toastsMap })

  // replace above 3 lines with below code to enable animation on removal
  // but on too many frequent toasts, sometimes toasts stop being removed from DOM and behave unexpectedly
  // given enough time, this can be fixed

  // t.isZombie = true
  // this.setState({ toasts })
  /* // actually remove now, wait for repaint
  setTimeout(() => {
    delete toastsMap[id]
    toasts.splice(toasts.findIndex(t => t.id === id), 1)
    this.setState({ toasts, toastsMap })
  }, 400) // wait for animation to complete, slightly extra */
}

export let removeAllToasts = function () {
  this.setState({ toasts: [], toastsMap: {} })
}

class ToasterCA extends Component {
  constructor (props) {
    super(props)
    this.state = { toasts: [], toastsMap: {} }

    toast = toast.bind(this)
    removeToast = removeToast.bind(this)
    removeAllToasts = removeAllToasts.bind(this)

    window.addEventListener('blur', () => {
      ; (this.state.toasts || []).forEach((t) => {
        stopAutomaticRemoval(t)
      })
    })
    window.addEventListener('focus', () => {
      ; (this.state.toasts || []).forEach((t) => {
        setAutomaticRemoval(t)
      })
    })
  }

  handleUndo (toastId) {
    const selectedToast = this.state.toasts.find((toast) => toast.id === toastId)
    selectedToast.onUndo()
    removeToast(toastId)
  }

  render () {
    const { toasts } = this.state
    const { sortByLatest } = this.props

    return (
      <div
        className={`toaster-inner ${sortByLatest ? 'toast-sort-reverse' : ''}`}
      >
        {(toasts || []).map((t) => (
          <div
            key={t.id}
            data-id={t.id}
            className={`toast${t.variant ? ' bg-' + t.variant : ''} ${t.isZombie ? ' toast-zombie' : ''
              }`}
          >
            <div className='toast-content'>
              {t.icon && (
                <div className='toast-icon'>
                  {
                    t.iconType === TOASTER_ICON_TYPE_SMALL
                    ? <Icon type={t.icon} style={{ color: '#FFFFFF' }} />
                    : <HeadIcon type={t.icon} style={{ color: '#FFFFFF' }} />
                  }
                </div>
              )}
              <div className='toast-message'>
                {t.title && (
                  <>
                    <b>{t.title}</b>
                    <br />
                  </>
                )}
                {typeof t.message === 'string'
                  ? t.message : t.message(t.id)}
                {/* {t.isDownloading && <CircularProgress color='inherit' size={28} style={{ marginLeft: '28px' }} />} */}
                {t.isDownloading && '...'}
              </div>
            </div>
            <div className='toast-actions'>
              {t.onUndo && (
                <>
                  <div className='undo-seprator'/>
                  <div className='toast-action undo' onClick={() => this.handleUndo(t.id)}>
                    {t.undoLabel}
                  </div>
                </>
              )}
              {!t.isDownloading && (
                <div className='toast-action' onClick={() => removeToast(t.id)}>
                  {/* <i className='fa fa-fw fa-close' /> */}
                  <Icon type='delete' style={{ color: '#FFFFFF' }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

ToasterCA.propTypes = {
  sortByLatest: PropTypes.bool,
}

ReactDOM.render(<ToasterCA sortByLatest />, document.getElementById('toaster'))

export default {
  toast,
  toastSuccess,
  toastInfo,
  toastWarning,
  toastError,
  toastMuted,
  removeToast,
  removeAllToasts,
  toastVariants,
}
