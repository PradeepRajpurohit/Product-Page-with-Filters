import React from 'react'
import Filters from './Filters'
import ProductsList from './ProductsList'
import data from '../data/data.json'
import Search from './Search'

const Products = () => {

  return (
    <section className='p-4 md:10 md:grid gap-2 grid-cols-10'>
      <div className='col-span-4'>
        <Filters />
      </div>
      <div className='col-span-6'>
        <div className='my-4 mx-2 mb-0 flex sticky top-8 z-10 bg-green-400 p-2 rounded max-md:hidden items-center justify-between'>
          <p className='text-gray-700 font-semibold'>{data.length} available</p>
          <Search />
        </div>

        <ProductsList />
      </div>

    </section>
  )
}

export default Products
