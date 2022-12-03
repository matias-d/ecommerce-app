import React, { useState } from 'react'
import {RiHome2Line, RiCustomerService2Line, RiShoppingCart2Line, RiTeamLine, RiCheckboxBlankCircleFill, RiMenu3Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const Sidebar = () => {


    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <section className={`lg:w-96  w-72 fixed ${showModal ? 'left-0' : '-left-full'} md:relative  z-40 bg-gray-100 md:bg-base-ligth/70 transition-all duration-300 md:left-0`}>
        <div className='flex flex-col justify-between h-full pt-4'>
        <div className='flex flex-col gap-4 items-center mb-6'>
            <img src='https://i.postimg.cc/BnZ9DMtq/day92-freelancing.png' className='h-28 w-28 ring ring-base-ligth rounded-full'/>
            <h2 className='text-lg font-medium text-third lg:text-white'>Usuario</h2>
            <p className='bg-base-ligth w-20 py-1 px-3 rounded-xl text-white font-medium'>Admin</p>
        </div>
        <ul className='flex flex-col gap-4 bg-base-ligth h-full py-12 rounded-tr-[100px]  px-6'>
            <li><Link to='/' className='flex items-center gap-2 text-white font-medium text-md hover:bg-base-semilight p-2 rounded-full'><RiHome2Line className=' text-xl font-bold' /> Inicio</Link></li>
            <li><Link to='/menu' className='flex items-center gap-2 text-white font-medium text-md hover:bg-base-semilight p-2 rounded-full'><RiShoppingCart2Line className=' text-xl font-bold'/>Tus Productos</Link></li>
            <li><a href='#' className='flex items-center gap-2 text-white font-medium text-md hover:bg-base-semilight p-2 rounded-full'><RiTeamLine className=' text-xl font-bold'/> Clientes</a></li>
            <li className='mb-8'><a href='#' className='flex items-center gap-2 text-white font-medium text-md hover:bg-base-semilight p-2 rounded-full'><RiCustomerService2Line className=' text-xl font-bold'/> Reportes</a></li>
            <li className='relative flex gap-2 items-center hover:bg-base-semilight p-2 rounded-full'>
                <img src='https://i.postimg.cc/BnZ9DMtq/day92-freelancing.png' className='h-8 w-8 rounded-full'/>
                <RiCheckboxBlankCircleFill className='text-xs text-green-400 absolute bottom-2 left-6 '/>
                <p className='text-white font-medium text-sm'>Usuario</p>
            </li>
        </ul>   
        </div>
    </section>
    <button className='absolute bottom-6 right-8 md:hidden hover:scale-105 transition-all z-40'>
            <RiMenu3Fill className='bg-base-ligth p-2 box-content rounded-full text-base-primary fon-bold text-lg' onClick={() =>setShowModal(!showModal) }/>
    </button>
    </>
  )
}
