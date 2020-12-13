'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [{
    type: 'PROCESS_NAME',
    processName: 'ClashX',
    proxy,
}, {
    type: 'PROCESS_NAME',
    processName: 'shadowsocksr.exe',
    proxy,
}, {
    // 迅游加速器
    type: 'PROCESS_NAME',
    processName: 'xunyou.exe',
    proxy,
}]

