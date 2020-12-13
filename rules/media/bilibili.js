'use strict'

const { DirectSymbol } = require('@indexyz/bumblebee')

const proxy = DirectSymbol

module.exports = [{
    type: 'USER_AGENT',
    agent: '*bili*',
    proxy,
}, {
    type: 'DOMAIN_KEYWORD',
    keyword: 'bilibili',
    proxy,
}, ...[
    'acg.tv',
    'acgvideo.com',
    'b23.tv',
    'biliapi.com',
    'biliapi.net',
    'bilibili.com',
    'biligame.com',
    'biligame.net',
    'hdslb.com',
    'im9.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
}))]

