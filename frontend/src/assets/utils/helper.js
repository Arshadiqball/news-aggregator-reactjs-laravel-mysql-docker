export const API_DOMAIN = "http://localhost:8000/api/"

export const capitaLize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export  const isAuthenticated = () => {
  return localStorage.getItem("token") !== null
}

export const rand5Chars = function () {
  return (Math.random() + 1).toString(36).substring(2, 5)
}

export const randId = function () {
  return '_' + rand5Chars() + rand5Chars()
}

export const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n)

export const classes = (styles, classNames, originals = '') => {
  const _classes = originals ? [classNames] : []
  classNames = classNames.split(' ')
  classNames.forEach((c) => {
    _classes.unshift(styles[c])
  })
  return _classes.join(' ')
}
