import { getData } from '@/components/products/ProductsList'
import { ProductType } from '@/types/product'

const mockProducts: ProductType[] = [
  { id: '1', name: 'Product 1', price: 100 },
  { id: '2', name: 'Product 2', price: 200 },
]

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ items: mockProducts }),
  })
) as jest.Mock

describe('ProductsList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch products successfully when API returns 200 status code', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ items: [{ id: 1, name: 'Product 1' }] }),
      })
    ) as jest.Mock

    const data = await getData()
    expect(data).toEqual({ items: [{ id: 1, name: 'Product 1' }] })
  })

  it('should throw an error when API returns a non-200 status code', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock

    await expect(getData()).rejects.toThrow('Something went wrong.')
  })
})
