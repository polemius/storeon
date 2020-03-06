let { h } = require('preact')

let useStoreon = require('../')

module.exports = (...keys) => {
  let Component = keys.pop()
  return originProps => {
    let props = { ...originProps, ...useStoreon(...keys) }
    return h(Component, props)
  }
}
