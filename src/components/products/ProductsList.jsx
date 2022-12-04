import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/GetProducts';
import { Product } from './Product';
import { RiArrowRightLine } from 'react-icons/ri'
import { Spinner } from '../svg/Spinner';
import { Link } from 'react-router-dom';

export const ProductsList = ({title, categorieId}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts({categoryId : categorieId}).then(res => {
            setProducts(res);
            setLoading(true)
        });
    }, []);

  return (
    <div className='flex flex-col lg:items-start mb-6 px-4'>
    <div className='flex justify-between  w-full  mb-2'>
        <h1 className='font-medium text-xl text-base-superDark mb-4'>{title}</h1>
        <Link to={`/ecommerce-app/category/${String(title).toLowerCase()}`}>
            <p className='flex items-center text-base-superDark/70 text-xs font-medium tracking-widest hover:text-base-superDark/90 cursor-pointer transition-colors group'>VER TODO <RiArrowRightLine className='text-lg group-hover:translate-x-2 transition-all'/></p>
        </Link>
    </div>
    {
        !loading ? <Spinner />
        : 
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {
                products
                .splice(0, 6)
                .map((product) => (
                    <Product product={product}/>
                ))
            }
        </div>
    }
    </div>
  )
}
