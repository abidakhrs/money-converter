import React from 'react'
import Nav from '@/components/shared/nav'
import { CurrencyTable } from '@/components/convert/currency-table';
import ConvertForm from '@/components/convert/currency-form';

export const metadata = {
  title: 'Convex | Convert',
  description: 'Convert currency in real-time with live exchange rates',
  icons: {
    icon: '/mclogo.png'
  },
};

const page = () => {
  return (
    <div>
      <Nav />
      <div className='container flex mx-auto max-w-6xl'>

        <div className='grid grid-flow-col md:grid-flow-row grid-cols-3 gap-4 w-full'>
          <div className='max-w-md'>
            <CurrencyTable />
          </div>
          <div className='col-span-2 w-full'>
            <ConvertForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page