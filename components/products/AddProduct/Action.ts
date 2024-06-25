'use server'
import { revalidateTag } from 'next/cache'

import { API_URL } from '@/config'

export async function onSubmit(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    price: formData.get('price'),
  }

  const response = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rawFormData),
  })

  await response.json()

  revalidateTag('products')
}
