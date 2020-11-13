
import { fromWei } from 'web3-utils'

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
  return parseFloat(Number(n).toFixed(d)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * @function fromWeiToKanva
 * KNV use 8 decimals, gwei use 9. We using gwei and divide it to 10
 *
 * @param {number} amount - Amount in Kanva (10**8)
 * @return {number} - Formatted number
 */
export function fromWeiToKanva(amount) {
  const gweiAmount = fromWei(amount, 'gwei')
  const kanvaAmount = gweiAmount * 10
  return kanvaAmount.toString()
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

