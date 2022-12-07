import React from 'react'
import {RiCheckboxCircleLine} from 'react-icons/ri'

export const ModalDelete = () => {
  return (
    <div className='bg-base-primary p-4 rounded-xl fixed right-6 bottom-4 text-center z-50'>
        <h4 className='flex items-center gap-x-2 font-medium text-green-500'><RiCheckboxCircleLine/> Su Producto ha sido borrado con exito!</h4>
        <p className='text-gray-400 text-sm'>Refresque la pagina para visualizarlo</p>
    </div>
  )
}
