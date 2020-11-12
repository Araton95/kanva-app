// Clients
import Web3Client from '../services/Web3Client'

// ABIs
import { abi as ERC20 } from './abi/ERC20.json'
import { abi as KnvNft } from './abi/KnvNft.json'
import { abi as PaletteRewards } from './abi/PaletteRewards.json'
import { abi as StakingRewards } from './abi/StakingRewards.json'

// Utils
import { Singleton } from '../utils'

// Constants
import {
  coreAddresses,
  poolsAddresses,
  liquidityTokensAddresses
} from '../constants'

class ContractSingleton extends Singleton {
  constructor(abi, address) {
    super()
    this.contract = this.createContract(abi, address)

    abi.forEach((method) => {
      this[method.name] = (...args) => {
        return this.contract.methods[method.name](...args)
      }
    })
  }

  createContract(abi, address) {
    try {
      const { web3 } = Web3Client.getInstance()
      return new web3.eth.Contract(abi, address)
    } catch (error) {
      throw error
    }
  }
}

// Kanva contracts

export class KanvaToken extends ContractSingleton {
  static createInstance() {
    return new KanvaToken(ERC20, coreAddresses['KANVA_TOKEN_ADDRESS'])
  }
}

export class KanvaNft extends ContractSingleton {
  static createInstance() {
    return new KanvaNft(KnvNft, coreAddresses['KANVA_NFT_ADDRESS'])
  }
}

// Staking pools

export class KnvEthPool extends ContractSingleton {
  static createInstance() {
    return new KnvEthPool(PaletteRewards, poolsAddresses['KNV_ETH_POOL'])
  }
}

export class UsdcEthPool extends ContractSingleton {
  static createInstance() {
    return new UsdcEthPool(StakingRewards, poolsAddresses['USDC_ETH_POOL'])
  }
}

export class UsdtEthPool extends ContractSingleton {
  static createInstance() {
    return new UsdtEthPool(StakingRewards, poolsAddresses['USDT_ETH_POOL'])
  }
}

export class DaiEthPool extends ContractSingleton {
  static createInstance() {
    return new DaiEthPool(StakingRewards, poolsAddresses['DAI_ETH_POOL'])
  }
}

// Liquidity pool tokens

export class KnvEthV2 extends ContractSingleton {
  static createInstance() {
    return new KnvEthV2(ERC20, liquidityTokensAddresses['KNV_ETH_V2'])
  }
}

export class UsdcEthV2 extends ContractSingleton {
  static createInstance() {
    return new UsdcEthV2(ERC20, poolsAddresses['USDC_ETH_V2'])
  }
}

export class UsdtEthV2 extends ContractSingleton {
  static createInstance() {
    return new UsdtEthV2(ERC20, poolsAddresses['USDT_ETH_V2'])
  }
}

export class DaiEthV2 extends ContractSingleton {
  static createInstance() {
    return new DaiEthV2(ERC20, poolsAddresses['DAI_ETH_V2'])
  }
}