import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/GetAllProducts';
import { Spinner } from '../svg/Spinner';
import { Product } from './Product';


export const ProductsCategory = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryName} = useParams()

    useEffect(() => {
        getAllProducts().then(res => {
            const filteredProducts = res.filter((product) => product.category === categoryName) 
            setProducts(filteredProducts);
            setLoading(true)
        });
    }, [categoryName]);


  return (
    <main className='lg:w-[60%] mx-auto py-12 px-8'> 
        <h2 className='text-xl font-medium text-base-dark text-start mb-4'>Productos <span className='text-base-ligth capitalize'>{categoryName}</span></h2>
        {
            !loading ? <Spinner />
            : 
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    products.map((product) => (
                        <Product product={product} />
                    ))
                }
            </div>
        }
    </main>
  )
}
