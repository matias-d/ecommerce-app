
import { Banner } from '../components/Banner'

import { Footer } from '../components/Footer'

import { Header } from '../components/Header'

import { ProductsList } from '../components/products/ProductsList'

import Underline from '../components/svg/Underline'


export const Home = () => {


  return (
    <div className='bg-white'>
        <Header />
        <main className='flex flex-col justify-center items-center  gap-12 md:px-28 relative'>
            <Banner/>
            <section className='py-10 relative' id='productosSection'>
                <h2 className='text-center font-medium text-2xl text-base-dark mb-6 '>Nuestros <span className='text-base-ligth'>Productos</span>.</h2>
                <Underline className='absolute left-[42vw] top-20' />
                <ProductsList title='Consolas' categorieId={1}/>
                <ProductsList title='Deportes' categorieId={2}/>
                <ProductsList title='Moda' categorieId={3}/>
                <ProductsList title='Otros' categorieId={4}/>
            </section>
        </main>
        <Footer />
    </div>
  )
}
