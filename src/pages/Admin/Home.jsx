import React from 'react'
import { useParams } from 'react-router-dom'


import { Header } from '../../components/menu/Header'
import { ProductSearchList } from '../../components/menu/ProductSearchList'
import { ProductsList } from '../../components/menu/ProductsList'
import { Sidebar } from '../../components/menu/Sidebar'


export const MenuAdmin = () => {

  const {productSearch} = useParams()

  return (
    <div className='flex h-full '>
        <Sidebar />
        <main className='h-[100vh] w-full  scrollbar-thin scrollbar-thumb-base-ligth scrollbar-track-base-ligth/50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <Header />
            <section className='px-8'>
                {productSearch ?<ProductSearchList /> :<ProductsList />}
            </section>
        </main>
        
    </div>
  )
}
