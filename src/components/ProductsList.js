import React from 'react'
import { useSelector } from 'react-redux'
import data from '../data/data.json'

const ProductsList = () => {

  const { searchTitle, category } = useSelector(state => state.filter)
  
  let products =
  category.length > 0
  ? data.filter((item) =>
    item.category.includes(category.find(element => element.includes(item.category)))
  ): data;
  
  products = products.filter((item)=>{
    return item.title.toLowerCase().includes(searchTitle.toLowerCase());
  })

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-4">
          {products.map((item) => {
            return <div key={item.id} class="lg:w-1/3 md:w-1/2 p-4 w-full border-2">
              <a href='/' class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.images[0]} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                <p class="mt-1">$ {item.price}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsList
