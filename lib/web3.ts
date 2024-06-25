import Web3 from 'web3'

const provider = 'https://sepolia.infura.io/v3/d8fe67490de04f898b7864a4fc3384e7'
const web3Provider = new Web3.providers.HttpProvider(provider)
const web3 = new Web3(web3Provider)

export default web3
