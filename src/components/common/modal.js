import React, { useState, useEffect } from "react"
import Rodal from "rodal"
import { Spin } from 'antd'
import { fromWei, toWei } from 'web3-utils'
import styled from "styled-components"

import { Pools, MAX_UINT } from '../../constants'
import {
  depositLp,
  withdrawLp,
  withdrawReward,
  approveLpTokens,
  getLpApproval,
  getPoolAddress,
  getEarnedRewards,
  getLpTokenBalance,
  getDepositedTokens
} from '../../services/ContractService'
import { fromWeiToKanva } from '../../utils'
import Web3Client from '../../services/Web3Client'

const Modal = ({
  updateDepositsAmounts,
  userWallet,
  setModal,
  setUser,
  pool
}) => {
  const [approveLoader, setApproveLoader] = useState(false)
  const [depositLoader, setDepositLoader] = useState(false)
  const [withdrawLoader, setWithdrawLoader] = useState(false)
  const [claimLoader, setClaimLoader] = useState(false)

  const [isApproved, setIsApproved] = useState(false)
  const [deposited, setDeposited] = useState('0')
  const [rewards, setRewards] = useState('0')
  const [lpBalance, setLpBalance] = useState('0')
  const [depositAmount, setDepositAmount] = useState('0.05')
  const [withdrawAmount, setWithdrawAmount] = useState('0.05')

  const isKnvPoolSelected = pool === Pools['KNV/ETH']
  const poolTokenName = `${pool}-UNIV2-LP`

  const modalText = !isKnvPoolSelected ?
    `Staking ${poolTokenName} tokens in the ${pool} pool earns you KNV Tokens.`
    :
    `Staking ${poolTokenName} tokens in the ${pool} pool earns you roughly x7 KNV compared to other pools,\
    you could also earn 5 palette points(max) per day. With enough Palette points, you can mint an exclusive NFT.\
    Supply and palettes required differs across NFTs.`

  useEffect(() => {
    if (userWallet) {
      const poolAddress = getPoolAddress(pool)
      getLpApproval(pool, userWallet, poolAddress).then(async currentAllowance => {
        // If not approved
        if (currentAllowance.toString() !== MAX_UINT) {
          setIsApproved(false)
          return
        }
        setIsApproved(true)

        const lpTokenBalance = await getLpTokenBalance(pool, userWallet)
        setLpBalance(lpTokenBalance.toString())

        await updateUserDepositAmount()
        await updateEarningsAmount()
      })
    }
  }, [userWallet])

  const approve = async (event) => {
    event.preventDefault()

    if (!userWallet) {
      try {
        const web3Client = new Web3Client()
        // Enable ETH process ...
        await web3Client.connectEth()

        // Get and update props wallet
        const wallet = await web3Client.getWallet()
        setUser(wallet)
      } catch (error) {
        console.log(error)
      } finally {
        return
      }
    }

    if (approveLoader) {
      return
    }

    setApproveLoader(true)

    const poolAddress = getPoolAddress(pool)
    approveLpTokens(pool, userWallet, poolAddress)
    .then(() => setIsApproved(true))
    .catch(error => console.log(error))
    .finally(() => setApproveLoader(false))
  }

  const deposit = (event) => {
    event.preventDefault()

    if (depositLoader) {
      return
    }

    setDepositLoader(true)

    const amount = toWei(event.target.depositAmount.value)
    depositLp(pool, userWallet, amount)
    .then(() => {
      // Update user deposit amount
      updateUserDepositAmount()

      // Update total deposits amount
      updateDepositsAmounts()
    })
    .catch(error => console.log(error))
    .finally(() => setDepositLoader(false))
  }

  const withdraw = (event) => {
    event.preventDefault()
    if (withdrawLoader) {
      return
    }

    setWithdrawLoader(true)

    const amount = toWei(event.target.withdrawAmount.value)
    withdrawLp(pool, userWallet, amount)
    .then(() => {
      // Update user deposit amount
      updateUserDepositAmount()

      // Update total deposits amount
      updateDepositsAmounts()
    })
    .catch(error => console.log(error))
    .finally(() => setWithdrawLoader(false))
  }

  const claim = (event) => {
    event.preventDefault()
    if (claimLoader) {
      return
    }

    setClaimLoader(true)

    withdrawReward(pool, userWallet)
    .then(() => updateEarningsAmount())
    .catch(error => console.log(error))
    .finally(() => setClaimLoader(false))
  }

  const updateUserDepositAmount = async () => {
    const depositedTokens = await getDepositedTokens(pool, userWallet)
    setDeposited(depositedTokens.toString())
  }

  const updateEarningsAmount = async () => {
    const availableRewards = await getEarnedRewards(pool, userWallet)
    setRewards(availableRewards.toString())
  }

  return (
    <RodalContainer>
      <Rodal
        visible={true}
        onClose={() => setModal(false)}
        customStyles={{
          height: "fit-content",
        }}
      >
        <RodalContent>
            <h2>{ pool } pool</h2>
            <InfoText>{ modalText }</InfoText>
            {!isApproved &&
              <>
                <Form name="approve-ref" onSubmit={e => approve(e)}>
                  <button type="submit" disabled={approveLoader}>
                    { approveLoader ? <Spin /> : 'Approve' }
                  </button>
                </Form>
              </>
            }

            {isApproved &&
              <>
                <div className="line"></div>

                <h2>Your deposit: <b>{ fromWei(deposited) }</b> { poolTokenName }</h2>
                <>
                  <h2>Stake more</h2>
                  <Form name="deposit-ref" onSubmit={e => deposit(e)}>
                    <InputGroup>
                      <Input
                        type="number"
                        name="depositAmount"
                        step="any"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        required
                      />
                      <span onClick={() => setDepositAmount(fromWei(lpBalance))}>
                        Max
                      </span>
                    </InputGroup>
                    <button type="submit" disabled={depositLoader}>
                      { depositLoader ? <Spin /> : 'Deposit' }
                    </button>
                  </Form>

                  <h2>Withdraw from pool</h2>
                  <Form name="withdraw-ref" onSubmit={e => withdraw(e)}>
                    <InputGroup>
                      <Input
                        type="number"
                        name="withdrawAmount"
                        required
                        placeholder="0.5"
                        step="any"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        required
                      />
                      <span onClick={() => setWithdrawAmount(fromWei(deposited))}>
                        Max
                      </span>
                    </InputGroup>
                    <button type="submit" disabled={withdrawLoader}>
                      { withdrawLoader ? <Spin /> : 'Withdraw' }
                    </button>
                  </Form>
                </>

                <div className="line"></div>

                <h2>Your rewards: <b>{ fromWeiToKanva(rewards) }</b> KNV</h2>
                <>
                  <h2>Claim reward</h2>
                  <Form name="claim-ref" onSubmit={e => claim(e)}>
                    <button type="submit" disabled={claimLoader}>
                      { claimLoader ? <Spin /> : 'Claim' }
                    </button>
                  </Form>
                </>
              </>
            }
        </RodalContent>
      </Rodal>
    </RodalContainer>
  )
}

export default Modal

const RodalContainer = styled.div`
  .rodal {
    .rodal-dialog {
      width: 750px !important;

      @media (max-width: 776px) {
        width: 90% !important;
      }
    }
  }
`;

const InfoText = styled.p`
  margin-bottom: 20px
`

const RodalContent = styled.div`
  margin-top: 15px;
  padding: 0 40px 0 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 776px) {
    padding: 0;
  }

  h2 {
    color: #010f30;
    font-family: Ubuntu;
    margin-bottom: 10px;
  }

  p {
    font-family: Ubuntu;
    color: #010f30;
    font-size: 16px;
    text-align: justify;
    letter-spacing: 0.5px;

    span {
      font-size: 20;
      font-weight: 700;
    }
  }

  button {
    margin: 0;
    outline: none;
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 18px;
    background: #fff;
    border: 1px solid #010f30;
    width: 175px;
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 300ms;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    &:hover {
      transform: translateY(-3px);
    }
  }

  .line {
    width: 100%;
    margin: 20px 0;
    border: 1px dashed #bbb;
  }
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 30px;
`

const InputGroup = styled.div`
  position: relative;
  margin-right: 15px;

  span {
    position: absolute;
    right: 0;
    top: 50%;
    padding: 12px 10px;
    font-size: 16px;
    transition: 300ms color;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 100;

    &:hover {
      color: #015fcc;
    }
  }
`

const Input = styled.input`
  padding: 0 50px 0 15px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid #011130;
  border-radius: 4px;
  -moz-appearance: textfield;
  height: 100%;

  &:active,
  &:focus {
    outline: none;
    border: 1px solid #015fcc
  }
`