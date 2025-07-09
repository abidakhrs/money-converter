import axios from 'axios'

export async function convertCurrency({ from, to, value }: {from: string, to: string, value: number }) {
  const apiKey = 'u4TUdsRRhDsqdaTTF8lgUQ==sqgezoQ5t9C2HKFo'

  const res = await axios.get('https://api.api-ninjas.com/v1/convertcurrency', {
    params: { have: from, want: to, amount: value },
    headers: { 'X-Api-Key': apiKey || '' },
  })

  return res.data
}
