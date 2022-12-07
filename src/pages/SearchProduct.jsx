import React from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductSearchList } from '../components/products/ProductSearchList'


export const SearchProduct = () => {

    const {productSearch}  = useParams()

  return (
    <div>
        <Header />
        <section className='py-12 w-full lg:px-28 px-8'>
            <h3 className=' font-medium text-lg text-base-dark mb-4'>Productos de <span className='capitalize text-base-ligth'>{productSearch}</span></h3>
            <ProductSearchList />
        </section>
        <Footer />
    </div>
  )
}
