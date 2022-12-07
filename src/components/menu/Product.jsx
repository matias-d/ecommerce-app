
import {RiDeleteBin6Line, RiPencilLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Controllers } from '../../services/Controllers'


export const Product = ({product, setShowModal}) => {
  

 const handleClick = (id) => {
  setTimeout(() => {
    setShowModal(false)
  },4000)
  Controllers.deleteProduct(id)
  setShowModal(true)
 }


  return (
      <div className='flex flex-col relative group '>
          <img src={product.img} alt={product.name} className='w-36 h-36 object-cover  rounded-tr-xl rounded-tl-xl  '/>
          <RiDeleteBin6Line className='text-lg text-white bg-red-400 cursor-pointer p-1 box-content rounded-full absolute top-2 right-10 hover:scale-105 lg:opacity-0 lg:translate-y-2 group-hover:translate-y-0  group-hover:opacity-100 transition-all duration-200 ease-in-out' onClick={() => handleClick(product.id)}/>
        
          <Link to={`/ecommerce-app/menu/editar-producto/${product.id}`}>
            <RiPencilLine className='text-lg text-white bg-blue-400 cursor-pointer p-1 box-content rounded-full absolute top-2 right-2 hover:scale-105 lg:opacity-0 lg:translate-y-2 group-hover:translate-y-0  group-hover:opacity-100 transition-all duration-200 ease-in-out' />
          </Link>
          <div className='bg-base-dark/30 rounded-br-xl rounded-bl-xl p-2'>
            <h2 className='font-semibold w-32 text-gray-700 capitalize'>{product.name}</h2>
            <p className='font-semibold text-md text-base-semilight'> ${product.price}</p>
            <div className='flex justify-between'>
              <p className='font-semibold text-md text-base-third truncate w-10'># {product.id}</p>
              <p className='text-xs font-medium text-white bg-base-ligth/60 p-1 rounded-full'>{product.category}</p>
            </div>
          </div>
      </div>

  )
}