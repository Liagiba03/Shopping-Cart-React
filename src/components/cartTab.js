import React from 'react'
import { useSelector } from 'react-redux'

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  return (
    <div className='fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]'>
      CartTab
    </div>
  )
}

export default CartTab