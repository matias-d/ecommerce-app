import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import NotFound from '../components/svg/NotFound'

export const Error404 = () => {
  return (
    <div>
        <Header />
        <main className='flex justify-center items-center py-16'>
            <NotFound  className='w-96 h-96'/>
        </main>
        <Footer/>
    </div>
  )
}
