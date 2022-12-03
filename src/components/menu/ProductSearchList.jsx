import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSerachProduct } from '../../services/GetSearchProduct';
import NotFound from '../svg/NotFound';

import { Spinner } from '../svg/Spinner';
import { Product } from './Product';

export const ProductSearchList = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {productSearch}=useParams()

  useEffect(() => {
    getSerachProduct({search: productSearch}).then((res) =>{
      setProducts(res)
      setLoading(true)
    })
  }, [productSearch]);



  return (
    <div className='flex justify-center items-center py-12 '>
    {
      products.length === 0 && <NotFound className='w-96 h-96 object-cover '/>

    }
    {
      !loading ? <Spinner />
      :
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {
          products.map((product) =>(
            <Product product={product}/>
          ))
        }
      </div>
    }
    </div>
  )
}
