import React, { useEffect, useState } from 'react'
import {
    RiAttachment2, 
    RiPriceTag2Line,
    RiBallPenLine,
    RiMoneyDollarCircleLine
} from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom';
import { Controllers } from '../../../services/Controllers';
import { getOnlyProduct } from '../../../services/GetOnlyProduct';

export const InputsForm = () => {


    const {id} =  useParams()

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        img: '',
        category: '',
        name:'',
        price: '',
        description: '',
    });


    const handleChange = (e) =>{

        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(id){
            Controllers.editProduct(product)
        }else{

            Controllers.addProduct(product)
        }
        navigate('/ecommerce-app/menu')
    }

    useEffect(() => {
       if(id){
        getOnlyProduct({id : id}).then((res) => {
            setProduct(res)
        })
       }
    }, [id]);





  return (
    <div className='w-full  flex justify-center pb-12'>
        <section className='bg-base-primary p-8 rounded-xl w-42 lg:w-[450px] flex flex-col gap-6 drop-shadow-lg text-base-dark'>
        <h2 className='text-2xl font-medium text-base-ligth text-center'>{id ? 'Editar' : 'Agregar nuevo'} <span className='text-base-superDark'>Producto</span></h2>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
            <div className='relative'>
                <input
                value={product.img}
                 type='text' 
                 name='img' 
                 className='py-2 pl-8 pr-6 rounded-xl w-full bg-base-dark/10 outline-none  ' placeholder='URL de la imagen' 
                 required
                 onChange={(e) => handleChange(e)}/>

                <RiAttachment2 className='text-base-ligth text-lg absolute top-1/2 -translate-y-1/2 left-2' />
            </div>
            <div className='relative'>
            <select 
                value={product.category}
                name='category' 
                required
                className='py-2 pl-8 pr-6 rounded-xl w-full bg-base-dark/10 outline-none text-gray-400 dark:bg-base-dark/10 ' onChange={(e) => handleChange(e)}>
                    <option value="null" selected>Elija su categoria</option>
                    <option value="consolas">Consola</option>
                    <option value="deportes">Deporte</option>
                    <option value="moda">Moda</option>
                    <option value="otros">Otro</option>
                </select>
                <RiPriceTag2Line className='text-base-ligth text-lg absolute top-1/2 -translate-y-1/2 left-2 '/>
            </div>
            <div className='relative'>
                <input type='text' name='name' 
                value={product.name}
                required className='py-2 pl-8 pr-6 rounded-xl w-full bg-base-dark/10 outline-none' placeholder='Nombre del producto' onChange={(e) => handleChange(e)}/>
                <RiBallPenLine className='text-base-ligth text-lg absolute top-1/2 -translate-y-1/2 left-2 '/>
            </div>
            <div className='relative'>
                <input type='number' name='price' 
                value={product.price}
                required className='py-2 pl-8 pr-6 rounded-xl w-full bg-base-dark/10 outline-none' placeholder='Precio del producto' onChange={(e) => handleChange(e)}/>
                <RiMoneyDollarCircleLine className='text-base-ligth text-lg absolute top-1/2 -translate-y-1/2 left-2'/>
            </div>
            <div className='relative'>
                <textarea type='text'
                value={product.description}
                required name='description' className='py-2 pl-8 pr-6 rounded-xl w-full bg-base-dark/10 outline-none resize-none' placeholder='Descripcion del producto' onChange={(e) => handleChange(e)}/>
                <RiBallPenLine className='text-base-ligth text-lg absolute top-3 left-2'/>
            </div>
            <button type='submit' className='bg-base-ligth py-2 px-3 rounded-xl text-white font-semibold w-52 hover:bg-base-semilight transition-all hover:tracking-widest text-center shadow-xl shadow-base-ligth/20 '>{id ? 'Editar producto' : 'Agregar producto'}</button>
            </div>
        </form>
        </section>
  </div>
  )
}
