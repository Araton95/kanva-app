// Constants
import { Pools, MAX_UINT, poolsAddresses } from '../constants'

// Contracts
import {
  KanvaToken,
  // KanvaNft, // will be used on later stage
  KnvEthPool,
  UsdcEthPool,
  UsdtEthPool,
  DaiEthPool,
  KnvEthV2,
  UsdcEthV2,
  UsdtEthV2,
  DaiEthV2,
} from '../contracts'

// SETTERS

export const approveLpTokens = (pool, user, spender) => {
  const instance = getLPTokenInstance(pool)
  return instance.approve(spender, MAX_UINT).send({ from: user })
}

export const depositLp = (pool, user, amount) => {
  const instance = getPoolInstance(pool)
  return instance.stake(amount).send({ from: user })
}

export const withdrawLp = (pool, user, amount) => {
  const instance = getPoolInstance(pool)
  return instance.withdraw(amount).send({ from: user })
}

export const withdrawReward = (pool, user) => {
  const instance = getPoolInstance(pool)
  return instance.getReward().send({ from: user })
}

// GETTERS

export const getDepositedTokens = (pool, user) => {
  const instance = getPoolInstance(pool)
  return instance.balanceOf(user).call()
}

export const getPoolSupply = (pool) => {
  const instance = getPoolInstance(pool)
  return instance.totalSupply().call()
}

export const getLpApproval = (pool, user, spender) => {
  const instance = getLPTokenInstance(pool)
  return instance.allowance(user, spender).call()
}

export const getKanvaBalance = (user) => {
  const instance = KanvaToken.getInstance()
  return instance.balanceOf(user).call()
}

export const getLpTokenBalance = (pool, user) => {
  const instance = getLPTokenInstance(pool)
  return instance.balanceOf(user).call()
}

export const getKanvaSupply = () => {
  const instance = KanvaToken.getInstance()
  return instance.totalSupply().call()
}

export const getPaletteBalance = (user) => {
  const instance = KnvEthPool.getInstance()
  return instance.palletteEarned(user).call()
}

export const getEarnedRewards = (pool, user) => {
  const instance = getPoolInstance(pool)
  return instance.rewards(user).call()
}

export const getPoolAddress = (pool) => {
  let targetPoolAddress
  for (const poolName of Object.keys(poolsAddresses)) {
    if (poolName.includes(pool)) {
      targetPoolAddress = poolsAddresses[poolName]
      break
    }
  }

  return targetPoolAddress
}

// Internal helper methods

const getPoolInstance = (pool) => {
  let instance = null
  switch (pool) {
    case Pools['KNV/ETH']:
      instance = KnvEthPool.getInstance()
      break;
    case Pools['USDC/ETH']:
      instance = UsdcEthPool.getInstance()
      break;
    case Pools['USDT/ETH']:
      instance = UsdtEthPool.getInstance()
      break;
    case Pools['DAI/ETH']:
      instance = DaiEthPool.getInstance()
      break;
    default:
      break;
  }

  return instance
}

const getLPTokenInstance = (pool) => {
  let instance = null
  switch (pool) {
    case Pools['KNV/ETH']:
      instance = KnvEthV2.getInstance()
      break;
    case Pools['USDC/ETH']:
      instance = UsdcEthV2.getInstance()
      break;
    case Pools['USDT/ETH']:
      instance = UsdtEthV2.getInstance()
      break;
    case Pools['DAI/ETH']:
      instance = DaiEthV2.getInstance()
      break;
    default:
      break;
  }

  return instance
}