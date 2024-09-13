import React from 'react'
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
  const {id, name, price, image, slug} = props.data;

  return (
    <div className='bg-white, p-5 rounded-x1 shadow-sm'>
      <Link to = {slug}>
        <img src = {image} className='w-full h-80 object-cover object-top drop--[0_80px_30px_#0007]'/>
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font-medium'>{price}</span>
        </p>
        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2'>
          <img src='../assets/images/iconCart.png' className='w-5'/>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart