import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/GetAllProducts';

import { Spinner } from '../svg/Spinner';
import { Product } from './Product';

export const ProductsSilmilar = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
          getAllProducts().then((res) => {
            const foundedProduct = res.find((product) => product.id == id)
            const filteredProducts = res.filter((product) => product.categoryId === foundedProduct.categoryId)

            setProducts(filteredProducts)
            setLoading(true)
          })
    }, [id]);


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6'>
        {
            !loading ?
            <div className=' w-[80vw] lg:w-[1064px]'>
             <Spinner />
            </div>
            :
            <>
            {
                products
                .filter((product) => product.id !== id)
                .map((product) => (
                    <Product key={product.id} product={product}/>
                ))
            }
            </>
        }
    </div>
  )
}
