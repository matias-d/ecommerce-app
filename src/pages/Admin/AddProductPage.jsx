import React from 'react'
import { Footer } from '../../components/Footer'
import {RiArrowLeftLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { InputsForm } from '../../components/menu/add-product/InputsForm'

export const AddProduct = () => {
  return (
    <div>
      <Link to='/menu' className='font-medium text-base-ligth flex items-center gap-1 absolute  top-4 left-40 md:left-24 group'><RiArrowLeftLine className='group-hover:-translate-x-1 transition-all'/> Menu <span className='text-base-superDark'>Administrador</span></Link>
      <InputsForm />
      <Footer/>
    </div>
  )
}
