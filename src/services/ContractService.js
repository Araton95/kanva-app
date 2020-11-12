// Constants
import { Pools, MAX_UINT } from '../constants'

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
  return instance.approve(spender, MAX_UINT, { from: user })
}

export const depositLp = (pool, user, amount) => {
  const instance = getPoolInstance(pool)
  return instance.stake(amount, { from: user })
}

export const withdrawLp = (pool, user, amount) => {
  const instance = getPoolInstance(pool)
  return instance.withdraw(amount).send({ from: user })
}

export const withdrawReward = (pool, user, amount) => {
  const instance = getPoolInstance(pool)
  return instance.getReward(amount).send({ from: user })
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

export const getKanvaSupply = () => {
  const instance = KanvaToken.getInstance()
  return instance.totalSupply().call()
}

export const getPaletteBalance = (user) => {
  const instance = KnvEthPool.getInstance()
  return instance.pallettes(user).call()
}

export const getEarnedRewards = (pool, user) => {
  const instance = getLPTokenInstance(pool)
  return instance.earned(user).call()
}
// Internal helper methods

const getPoolInstance = (pool) => {
  let instance = null
  switch (pool) {
    case Pools.KNV_ETH:
      instance = KnvEthPool.getInstance()
      break;
    case Pools.USDC_ETH:
      instance = UsdcEthPool.getInstance()
      break;
    case Pools.USDT_ETH:
      instance = UsdtEthPool.getInstance()
      break;
    case Pools.DAI_ETH:
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
    case Pools.KNV_ETH:
      instance = KnvEthV2.getInstance()
      break;
    case Pools.USDC_ETH:
      instance = UsdcEthV2.getInstance()
      break;
    case Pools.USDT_ETH:
      instance = UsdtEthV2.getInstance()
      break;
    case Pools.DAI_ETH:
      instance = DaiEthV2.getInstance()
      break;
    default:
      break;
  }

  return instance
}
