
import { BN } from 'web3-utils'

/*
 * @function shortenAddress
 *
 * @param {String} address - Full ETH address
 * @param {Number} charsStart - Letters from start
 * @param {Number} charsEnd - Letters from end
 * @return {String} - Shortened address, ex: 0xAbCd...XyZ
 */
export const shortenAddress = (address, charsStart = 3, charsEnd = 4) => {
  return `${address.substring(0, charsStart + 2)}...${address.substring(
    address.length - charsEnd,
    address.length,
  )}`
}

/**
 * @function formatNumber
 *
 * @param {number|string} n - Number to be formatted
 * @param {number} d - Number to decimals to be parsed and displayed
 * @return {number} - Formatted number to be displayed on the UI
 */
export function formatNumber(n, d = 3) {
  return parseFloat(Number(n).toFixed(d))
}

/**
 * @function fromWeiToKanva
 *
 * @param {number} amount - Amount in Kanva (10**8)
 * @return {number} - Formatted number
 */
export function fromWeiToKanva(amount) {
  const knvDecimal = new BN(8) // Constant value from contracts
  const knvAmount = new BN(amount).div(new BN(10).pow(knvDecimal))
  return knvAmount.toString()
}

export class Singleton {
  instance = null

  static getInstance() {
    if (!this.instance) {
      this.instance = this.createInstance()
    }

    return this.instance
  }
}

