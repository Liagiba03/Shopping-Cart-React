import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../components/products';

const Detail = () => {
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug);
    if(findDetail.length>0){  
      setDetail(findDetail[0]);
    }else{
      window.location.href = '/';
    }
  }, [slug])

  return (
    <div>
      <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.image} className=''/>
        </div>
      </div>
    </div>
  )
}

export default Detail