import React, { useState } from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
export const Header = () => {


  const [searchProduct, setSearchProduct] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/ecommerce-app/moda/search/${searchProduct}`)
  }


  return (
    <header className='h-32  px-8  flex flex-col gap-4 py-6 items-center md:items-start md:flex-row justify-between shadow-lg'>
        <h1 className='text-3xl font-medium text-base-dark order-1 md:order-none md:text-center'>🌞 Bienvenido <span className='text-base-ligth'>Usuario</span></h1>
        <form onSubmit={handleSubmit}>
          <div className='relative'>
              <input 
              type='text' 
              value={searchProduct} 
              placeholder='Buscar productos' 
              className='py-2 pl-8 pr-4 rounded-full border-none outline-none bg-base-dark/25 text-base-dark text-sm w-72' 
              onChange={(e) => setSearchProduct(e.target.value)}/>
              <RiSearchLine className='absolute top-3 left-2 font-bold text-base-ligth'/>
          </div>
        </form>
     </header>
  )
}
