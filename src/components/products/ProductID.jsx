import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {RiStarFill, RiStarLine} from 'react-icons/ri'
import { getOnlyProduct } from '../../services/GetOnlyProduct';
import { Spinner } from '../svg/Spinner';

export const ProductID = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams()

    useEffect(() => {
        getOnlyProduct({id : id})
           .then((res) => {
                setProduct(res)
                setLoading(true)
            })
    }, [id]);

  return (
    <div className='flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-4 lg:h-[80vh] pt-4 lg:shadow-lg'>
    {
      !loading ? 
      <div className='w-96 lg:w-[68vw]'>
      <Spinner />
      </div> 
      :
      <>
      <img src={product.img} alt={product.name} className='lg:w-[400px] lg:h-[400px] object-cover rounded-xl'/>
        <div className='flex flex-col  gap-4 justify-center h-full'>
            <h2 className='text-2xl font-medium text-base-dark '>{product.name}</h2>
            <div className='flex items-center gap-2'>
            {
              product.discount && 
              <>
              <p className='bg-base-ligth text-orange-200 rounded-lg p-1 font-medium'>{product.discount.porcent}</p>
              <p className='text-gray-400  line-through'>{product.discount.priceToDisc}</p>
              </>
            }
              <p className='text-lg font-medium text-base-dark '><span className='text-base-ligth font-bold'>$</span> {product.price}</p>

            </div>
            <p className='flex text-base-ligth'> {[... new Array(5)].map((star, index) => {return index < product.rating ? <RiStarFill/> :  <RiStarLine/>}) }</p>
            <p>{product.description}</p>
        </div>
      </>
    }
        
    </div>
  )
}
