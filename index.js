'use strict'

const rules = require('./rules')
const proxies = require('./proxies')
const { clientConf, ProxifierClient } = require('@indexyz/bumblebee')
const fs = require('fs')
const fsExtra = require('fs-extra')

function renderConf(client) {
    return clientConf(client, {
        rules, proxies,
    })
}

async function main() {
    await fsExtra.ensureDir('./output')
    await fs.promises.writeFile('./output/Proxifier.ppx', renderConf(new ProxifierClient()))
}

main()
