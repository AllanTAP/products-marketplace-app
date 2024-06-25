import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('@/components/Web3Connection')
jest.mock('@/components/products/ProductsList')

describe('Home', () => {
  it('should render the Marketplace title correctly', () => {
    render(<Home />)
    const titleElement = screen.getByText('Marketplace')
    expect(titleElement).toBeInTheDocument()
  })
})
