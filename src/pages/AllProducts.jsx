import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductsCategory } from '../components/products/ProductsCategory'

export const AllProducts = () => {
  return (
    <div>
        <Header />
        <ProductsCategory />
        <Footer />
    </div>
  )
}
