'use client'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

import { onSubmit } from './Action'
import classNames from 'classnames'

function SubmitButton({ inputsHasContent }: { inputsHasContent: boolean }) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className={classNames(
        'float-right mt-4 bg-cyan-800 rounded-full p-1',
        !inputsHasContent ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer'
      )}
      disabled={pending || !inputsHasContent}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 500'
        className='fill-white h-4 w-4'
      >
        <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
      </svg>
    </button>
  )
}

export default function AddProduct() {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')

  return (
    <div className='flex flex-col items-center justify-center relative p-4 w-48 m-4 rounded-lg shadow-lg h-60 bg-cyan-400'>
      {showForm && (
        <form action={onSubmit} className='mt-4'>
          <label
            htmlFor='name'
            className='block my-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Name *
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor='price'
            className='block my-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Price *
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            id='price'
            name='price'
            type='number'
            min={1}
            step='any'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <SubmitButton inputsHasContent={!!(name && price)} />
        </form>
      )}
      <div
        onClick={() => setShowForm(!showForm)}
        className='h-6 w-6 text-gray-500 font-extralight text-center cursor-pointer'
      >
        {showForm ? (
          <span className='h-4 w-4 absolute top-2 right-2'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
              <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
            </svg>
          </span>
        ) : (
          <span className='hover:scale-125'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
            </svg>
          </span>
        )}
      </div>
    </div>
  )
}
