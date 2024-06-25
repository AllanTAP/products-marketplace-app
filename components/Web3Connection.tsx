'use client'
import { useEffect, useState } from 'react'

import web3 from '@/lib/web3'

const classname = 'w-1/2 float-left'

export default function Web3Connection() {
  const [connected, setConnected] = useState(false)
  const [blockNumber, setBlockNumber] = useState<string | null>(null)

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const network = await web3.eth.net.isListening()

        setConnected(network)
      } catch (error) {
        setConnected(false)
      }
    }

    const getBlockNumber = async () => {
      try {
        const blockNumber = await web3.eth.getBlockNumber()

        setBlockNumber(blockNumber?.toString())
      } catch (error) {
        console.error('Failed to fetch block number:', error)
      }
    }

    checkConnection()
    getBlockNumber()

    const interval = setInterval(getBlockNumber, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='p-4 h-24'>
      <h1 className={classname}>Blockchain Status</h1>
      <p className={classname}>
        Latest Ethereum Block is:{' '}
        {blockNumber !== null ? blockNumber || '--' + ' *' : 'Loading...'}
      </p>
      <p className={classname + ' mt-2'}>
        Connected: {connected ? 'Yes' : 'No'}
      </p>
      <div className={classname + ' text-xs mt-4'}>
        * Block number updated every 10 secs.
      </div>
    </div>
  )
}
