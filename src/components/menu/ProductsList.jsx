import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../services/GetAllProducts';
import { getProducts } from '../../services/GetProducts';

import { Spinner } from '../svg/Spinner';
import { Product } from './Product';

export const ProductsList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
        if(filter !== 'all'){
            getProducts({categoryId : filter}).then((res) => {
                setProducts(res)
                setLoading(true)
            })
        }else {
            getAllProducts().then((res) =>{
                setProducts(res)
                setLoading(true)
            })
        }
    }, [filter]);

  return (
    <div className='pb-12'>
        <div className='flex flex-col gap-4 md:flex-row justify-between my-6 items-center'>
            <div className='flex flex-col md:flex-row gap-4 items-center '>
                <h3 className='text-2xl font-medium text-base-dark'>Tus <span className='text-base-ligth'>productos</span></h3>
                <div> 
                    <select 
                    name='category' 
                    required
                    className='py-1 border-blue-500 px-4 rounded-xl w-full bg-base-dark/30 outline-none text-gray-400  ' onChange={(e) => setFilter(e.target.value)}>
                        <option value="all" selected>Todos</option>
                        <option value="1" >Consolas</option>
                        <option value="2">Deportes</option>
                        <option value="3">Moda</option>
                        <option value="4">Otros</option>
                    </select>
                </div>
            </div>
            <Link to={'/ecommerce-app/menu/agregar-producto'} className='bg-base-ligth py-2 px-3 rounded-xl text-white font-semibold w-52 hover:bg-base-semilight transition-all hover:tracking-widest text-center shadow-lg shadow-base-ligth/50'>Agregar producto</Link>
        </div>
        {
            !loading ? <Spinner />
            :
            <div className='grid grid-cols-2 place-items-center md:place-items-start md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {
                    products.map((product) => (
                        <Product product={product}/>
                    ))
                }
            </div>
        }
    </div>
  )
}
