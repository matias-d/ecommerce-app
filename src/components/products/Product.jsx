import React from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const Product = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='flex flex-col gap-y-1 relative group'>
          <RiShoppingBagLine className='hidden lg:block absolute top-12 left-16 text-2xl text-base-primary bg-base-ligth rounded-full p-3 box-content opacity-0 translate-y-2 group-hover:translate-y-0  group-hover:opacity-100 transition-all duration-200 ease-in-out
          hover:scale-105 shadow-xl'/>
          <img src={product.img} alt={product.name} className='w-62 h-40 object-cover rounded-xl  shadow-xl'/>
          <h2 className='font-semibold  '>{product.name}</h2>
          <div className='flex gap-2'>
          {
            product.discount &&
            <>
            <p className='bg-base-ligth text-orange-200 rounded-lg text-sm p-1 font-medium'>{product.discount.porcent}</p>
            </>
            
          }
           <p className='font-semibold text-md text-base-semilight'> ${product.price}</p>
          </div>
          
      </div>
    </Link>
  )
}
