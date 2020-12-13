'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [...[
    'lceda.cn',
    'jlc.com',
    'sz-jlc.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
})), {
    type: 'PROCESS_NAME',
    processName: 'pcassit.exe',
    proxy,
}]

