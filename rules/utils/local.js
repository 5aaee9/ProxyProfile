'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [{
    type: 'IP_RANGE',
    ip: '127.0.0.1',
    prefix: 8,
    proxy,
}, {
    type: 'IP_RANGE',
    ip: '192.168.0.0',
    prefix: 16,
    proxy,
}, {
    type: 'IP_RANGE',
    ip: '10.0.0.0',
    prefix: 8,
    proxy,
}, {
    type: 'IP_RANGE',
    ip: '172.16.0.0',
    prefix: 12,
    proxy,
}]
