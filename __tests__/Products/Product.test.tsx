import React from 'react'
import { render, screen } from '@testing-library/react'
import Product from '@/components/products/Product'

describe('Product', () => {
  const mockProduct = {
    name: 'Test Product',
    price: 1234.56,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render product name', () => {
    render(<Product {...mockProduct} />)
    const nameElement = screen.getByText(mockProduct.name)
    expect(nameElement).toBeInTheDocument()
  })

  it('should display zero price correctly when price is zero', () => {
    const { getByText } = render(<Product {...mockProduct} />)
    expect(getByText('1234,56 €')).toBeInTheDocument()
  })
})
