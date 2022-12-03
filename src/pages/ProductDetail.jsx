import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductID } from '../components/products/ProductID'
import { ProductsSilmilar } from '../components/products/ProductsSilmilar'

export const ProductDetail = () => {
  return (
    <div className=''>
        <Header />
        <section className=' md:w-[70vw] mx-auto flex justify-start px-12 mb-12'>
         <ProductID />
        </section>
        <section className='md:w-[75vw] mx-auto mb-12 px-12'>
          <h3 className='text-lg font-medium text-base-superDark mb-4'>Productos similares</h3>
          <ProductsSilmilar />
        </section>
        <Footer />
    </div>
  )
}
