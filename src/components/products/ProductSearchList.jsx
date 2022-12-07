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
    <div>
    {
      products.length === 0 && 
      <div className='flex justify-center items-center flex-col'>
        <NotFound className='w-56 h-56  lg:w-96 lg:h-96 object-cover '/>
        <h2 className='text-base-dark font-medium text-xl'>Su Producto <span className='text-base-ligth'>"{productSearch}"</span> no ha sido encontrado...</h2>
      </div>

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
