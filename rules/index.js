'use strict'

module.exports = [
    /* eslint-disable */
    // Bilibili 视频
    ...require('./media/bilibili'),

    // 网易云音乐
    ...require('./media/netease_music'),

    // 微软
    ...require('./software/microsoft'),

    // 代理软件
    ...require('./utils/proxies'),

    // 地域代理
    ...require('./utils/geoip'),

    // IP range direct
    ...require('./utils/local'),

    // 深圳嘉立创
    ...require('./software/jlc'),

    // 跟踪器
    ...require('./software/tracker'),

    // HyperV
    ...require('./utils/hyperv'),

    {
        type: 'FINAL',
        proxy: 'Proxy'
    }
]
