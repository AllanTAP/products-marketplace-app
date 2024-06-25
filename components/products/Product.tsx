import { formatCurrency } from '@/helpers/helpers'

interface ProductRenderType {
  name: string
  price: number
}

export default function ProductRender({ name, price }: ProductRenderType) {
  return (
    <div className='flex flex-col transition ease-in-out duration-300 bg-white my-8 mx-4 p-4 w-48 rounded-lg shadow-lg h-60 hover:scale-105 hover:shadow-xl'>
      <div className='flex-1 py-12 text-xl text-center'>{name}</div>
      <div className='p-4 text-sm'>{formatCurrency(price)}</div>
    </div>
  )
}
