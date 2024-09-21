import React, {useState, useEffect} from 'react'
import { products } from './products';

const CartItem = (props) => {
  const {productId, quantity} = props.data;
  const [detail, setDetail] = useState([]);
  useEffect(()=> {
    const findDetail = products.filter(product => product.id === productId)[0];
    setDetail(findDetail);
  }, [productId])
  //console.log(detail)
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
     

    </div>
  )
}

export default CartItem