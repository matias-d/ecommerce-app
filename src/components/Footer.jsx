import React from 'react'
import {RiUser3Line, RiMessage2Line} from 'react-icons/ri'


export const Footer = () => {



  return (
    <footer className='flex flex-col md:flex-row justify-around items-center py-12 bg-base-primary text-center md:text-start md:h-68 gap-y-4 border border-t-base-dark/5'>
         <img src='https://cdn-icons-png.flaticon.com/512/5248/5248390.png' className='w-16 h-16'/>
        <div className='flex flex-col gap-y-4'>
            <p className='text-sm font-medium text-base-dark/90 hover:underline'>Quienes Somos</p>
            <p className='text-sm font-medium text-base-dark/90 hover:underline'>Politica de privacidad</p>
            <p className='text-sm font-medium text-base-dark/90 hover:underline'>Programa de fidelidad</p>
            <p className='text-sm font-medium text-base-dark/90 hover:underline'>Nuestras Tiendas</p>
            <p className='text-sm font-medium text-base-dark/90 hover:underline'>Quiero ser franquiciado</p>
            <p className='text-sm font-medium text-base-dark/90 hover:underline'>Anunquie aquí</p>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h3 className='text-lg font-medium text-base-superDark'>Hable con nosotros</h3>
            <form className='flex flex-col gap-4 relative'>
                <input type='text' placeholder='Nombre' className='py-3 rounded-full border-none outline-none bg-base-dark/10 text-base-dark pl-8 pr-4  '/>
                <RiUser3Line className='text-base-ligth text-xl font-bold absolute top-4 left-2'/>
                <input type='text' placeholder='Escribe tu mensaje' className='py-3 pl-8 pr-4 rounded-full border-none outline-none bg-base-dark/10 text-base-dark'/>
                <RiMessage2Line className='text-base-ligth text-xl font-bold absolute top-20 left-2'/>
                <button className='bg-base-ligth py-2 px-3 rounded-full text-base-primary font-medium md:w-52 hover:bg-base-semilight transition-all hover:tracking-widest shadow-lg shadow-base-ligth/50'>Enviar Mensaje</button>

            </form>
        </div> 
    </footer>
  )
}
