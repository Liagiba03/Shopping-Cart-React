import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../components/products';

const Detail = () => {
  const {slug} = useParams();
  const {detail, setDeatil} = useState([]);

  useEffect(() => {
    const findDetail = products.filter(product => product.slud === slug);
    if(findDetail.length>0){
      setDeatil(findDetail[0]);
    }else{
      window.location.href = '/';
    }
  }, [slug])

  return (
    <div>Detail</div>
  )
}

export default Detail