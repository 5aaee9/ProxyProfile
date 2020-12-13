'use strict'

const { RejectSymbol } = require('@indexyz/bumblebee')

const proxy = RejectSymbol

module.exports = [
    'footprintdns.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
}))
