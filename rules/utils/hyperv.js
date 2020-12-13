'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [{
    type: 'PROCESS_NAME',
    processName: 'vmconnect.exe',
    proxy,
}]
