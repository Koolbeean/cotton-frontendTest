import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import getRpcUrl from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)

const getTargetDate = async (startBlock: number):Promise<string> => {
    const lastestBlock = await getLastestBlock()
    const periodBlock = startBlock - lastestBlock
    const millisecondsLeft = periodBlock * 3 * 1000
    const now = new Date()
    const targetDate = new Date(now.getTime() + millisecondsLeft).toString()
    return targetDate
}

const getLastestBlock = async() => {
    const web3 = new Web3(httpProvider)
    const lastestBlock = await web3.eth.getBlockNumber()
    return lastestBlock
}

export {getTargetDate, getLastestBlock}