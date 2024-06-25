import ProductsList from '@/components/products/ProductsList'
import Web3Connection from '@/components/Web3Connection'

export default function Home() {
  return (
    <main className='max-w-screen-lg lg:max-w-screen-2xl m-auto divide-y-4'>
      <h1 className='text-4xl text-gray-600 m-4 text-center'>Marketplace</h1>
      <Web3Connection />
      <ProductsList />
    </main>
  )
}
