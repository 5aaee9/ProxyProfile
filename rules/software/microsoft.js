'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [
    's-microsoft.com',
    'microsoft.com',
    'live.com',
    'xboxlive.com',
    'msedge.net',
    'office.com',
    'office365.com',
    'azureedge.net',
    'bing.com',
    'msn.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
}))
