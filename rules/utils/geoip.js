'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [{
    type: 'GEO_IP',
    geo: 'cn',
    proxy,
}, {
    type: 'GEO_IP',
    geo: 'private',
    proxy,
}]
