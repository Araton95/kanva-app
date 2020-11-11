
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
