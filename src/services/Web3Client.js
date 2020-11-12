import Web3 from 'web3'
import { toChecksumAddress } from 'web3-utils'

import { wssGateway } from '../constants'

export default class Web3Client {
  constructor(provider) {
    this.web3 = this.createWeb3(provider)

    // Set current instance
    Web3Client.instance = this
  }

  static getInstance() {
    if (!Web3Client.instance) {
      throw new Error('Web3 is not initialized')
    }
    return Web3Client.instance
  }

  getWallet() {
    if (Web3Client.instance) {
      return this.web3.eth.getAccounts().then((accounts) => toChecksumAddress(accounts[0]) )
    }
  }

  createWeb3(provider) {
    let web3

    if (provider) {
      web3 = new Web3(provider)
    } else if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider)
    } else {
      web3 = new Web3(new Web3.providers.WebsocketProvider(wssGateway))
    }

    return web3
  }

  connectEth() {
    return new Promise((resolve, reject) => {
      if (window.ethereum) {
        window.ethereum.enable()
        .then(resolve)
        .catch(reject)
      }
    })
  }
}
