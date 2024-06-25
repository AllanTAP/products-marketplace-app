import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Web3Connection from '@/components/Web3Connection'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Web3Connection', () => {
  it('should display "Connected: Yes" when connected to the blockchain', async () => {
    render(<Web3Connection />)

    await waitFor(() => {
      expect(screen.getByText('Connected: Yes')).toBeInTheDocument()
    })
  })

  it('should display "Connected: No" when not connected to the blockchain', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        web3: {
          eth: {
            getBlockNumber: () => Promise.resolve(''),
            net: {
              isListening: () => Promise.resolve(false),
            },
          },
        },
      })
    ) as jest.Mock

    render(<Web3Connection />)

    await waitFor(() => {
      expect(screen.getByText('Connected: No')).toBeInTheDocument()
    })
  })
})
