import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}
export const getWethContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.weth
}

export const getMasterChefContract = (sushi) => {
  // if (sushi){
  // console.debug("aib!! sushi",sushi)
  // }
  // console.debug(`sushi:${sushi} sushi.contracts:${sushi.contracts}  sushi.contracts.masterChef:${sushi.contracts.masterChef}` )
  return sushi && sushi.contracts && sushi.contracts.masterChef
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
        ({
          pid,
          name,
          type,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
          buylink,
          lplink,
          priceContract,
          priceAddress,
        }) => ({
          pid,
          id: symbol,
          name,
          type,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'aiProfit',
          earnTokenAddress: sushi.contracts.sushi.options.address,
          icon,
          buylink,
          lplink,
          priceContract,
          priceAddress,
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  const weight = new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))

  // console.debug('!!!pid:', pid)

  // console.debug('!!!allocPoint:', allocPoint)
  // console.debug('!!!totalAllocPoint:', totalAllocPoint)
  // console.debug('!!!weight:', weight)

  return weight
}

export const getPoolUserPortion = async (
  masterChefContract,
  pid,
  account,
  lpContract,
) => {
  const { amount, rewardDebt } = await masterChefContract.methods
    .userInfo(pid, account)
    .call()

  // Get balance of the token address
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()

  var weight = new BigNumber(amount).div(new BigNumber(balance))

  // console.debug('!!!tokenAmountWholeLP', balance)

  // console.debug('!!!account-pid:', account, pid)
  // console.debug('!!!getPoolUserPortion-amount:', amount)
  // console.debug('!!!weight:', weight)

  if (weight == 0) {
    weight = 1
  }

  return weight
}

export const getAIProfitPerToken = async (
  priceContract,
  aiProfit,
  objContract,
) => {
  const aiProfitBalance = await aiProfit.methods
    .balanceOf(priceContract.options.address)
    .call()

  const objectBalance = await objContract.methods
    .balanceOf(priceContract.options.address)
    .call()

  var price = new BigNumber(aiProfitBalance).div(new BigNumber(objectBalance))

  // console.debug('!!!aiProfitBalance', aiProfitBalance,priceContract.options.address,aiProfit.options.address)

  // console.debug('!!!objectBalance', objectBalance,priceContract.options.address,objContract.options.address)

  // console.debug('!!!getAIProfitPerToken-price', price.toString(),priceContract.options.address)

  return price
}

export const getEarned = async (masterChefContract, pid, account) => {
  // console.log('hello world!!:' + masterChefContract.options.address)
  return masterChefContract.methods.pendingAiProfit(pid, account).call()
}

export const getTotalLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
  account,
  sushi,
  priceContract,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()

  if (
    lpContract.options.address == '0x1777036615aAD253a245E85f20bA96a6Cf2d3078'
  ) {
    console.debug(
      '!!! tokenAmountWholeLP',
      tokenAmountWholeLP,
      lpContract.options.address,
    )
  }

  const tokenDecimals = await tokenContract.methods.decimals().call()
  // console.debug('!!! tokenDecimals',tokenDecimals,lpContract.options.address)

  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  if (
    lpContract.options.address == '0x1777036615aAD253a245E85f20bA96a6Cf2d3078'
  ) {
    console.debug('!!! balance', balance, lpContract.options.address)
  }

  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1

  if (
    lpContract.options.address == '0x1777036615aAD253a245E85f20bA96a6Cf2d3078'
  ) {
    console.debug('!!! totalSupply', totalSupply, lpContract.options.address)
  }

  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpContractBaseToken = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()

  if (
    tokenContract.options.address ==
    '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51'
  ) {
    console.debug(
      '!!! lpContractBaseToken',
      lpContractBaseToken,
      tokenContract.options.address,
    )
  }

  const lpContractBaseWorth = new BigNumber(lpContractBaseToken)
  const totalLpValue = portionLp
    .times(lpContractBaseWorth)
    .times(new BigNumber(2))
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))
  const baseAmount = new BigNumber(lpContractBaseToken)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))

  //   if (
  //     lpContract.options.address == '0x1777036615aAD253a245E85f20bA96a6Cf2d3078'
  // ) {

  //   console.debug('!!! totalLpValue', totalLpValue.toString(), lpContract.options.address)

  //   console.debug('!!! baseAmount', baseAmount.toString(), lpContract.options.address)
  // }

  //****/////////////////// useless: ///////////
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()

  // if (lpContract.options.address=='0x1777036615aAD253a245E85f20bA96a6Cf2d3078'){
  //   console.debug('!!! lpContractWeth',lpContractWeth,lpContract.options.address)
  //     }

  // console.debug('!!! lpContract.options.address',lpContract.options.address)
  // console.debug('!!! lpContractWeth  @@',lpContractWeth)

  // Return p1 * w1 * 2

  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  // const tokenAmount = new BigNumber(tokenAmountWholeLP)
  //   .times(portionLp)
  //   .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))

  //****///////////////////////////////////////////////////////

  return {
    tokenAmount,

    wethAmount,    
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),

    poolWeight: await getPoolWeight(masterChefContract, pid),
    poolUserPortion: await getPoolUserPortion(
      masterChefContract,
      pid,
      account,
      lpContract,
    ),
    aiProfitPerToken: await getAIProfitPerToken(
      priceContract,
      sushi.contracts.sushi,
      tokenContract,
    ),

    totalProfitValue: totalLpValue.div(new BigNumber(10).pow(18)),

  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.sushi.methods.totalSupply().call())
}

export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}
