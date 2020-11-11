import Web3 from 'web3'
const gateway = 'wss://mainnet.infura.io/ws/v3/723b4aa0e1984905ac524232c6764ef2'

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

  createWeb3(provider) {
    let web3

    if (provider) {
      web3 = new Web3(provider)
    } else if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider)
    } else {
      web3 = new Web3(new Web3.providers.WebsocketProvider(gateway))
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
