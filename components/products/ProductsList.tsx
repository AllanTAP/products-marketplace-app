import { API_URL } from '@/config'
import { ProductType } from '@/types/product'

import AddProduct from './AddProduct'
import Product from './Product'

export async function getData() {
  const products = await fetch(`${API_URL}/items`, {
    next: { tags: ['products'] },
  })

  if (!products?.ok) {
    throw new Error('Something went wrong.')
  }

  return products.json()
}

async function ProductsList() {
  const { items: products }: { items: ProductType[] } = await getData()

  return (
    <div>
      <div className='text-4xl text-gray-600 mt-4 mx-8'>Products</div>
      <div className='flex flex-wrap justify-start items-center my-4'>
        <AddProduct />
        {products.length ? (
          products.map((product: ProductType) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  )
}

export default ProductsList
