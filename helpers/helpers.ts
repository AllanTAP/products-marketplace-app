export function formatCurrency(amount: number) {
  const formatter = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  })

  return formatter.format(amount)
}
