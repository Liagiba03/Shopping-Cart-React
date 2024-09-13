import React from 'react'
import { products } from '../components/products'
import ProductCart from '../components/productCart'


const Home = () => {
  return (
    <>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5'>
        {products.map((product,key) =>
          <ProductCart key={key} data={product}/>
        )}
      </div>
    </>
  )
}

export default Home