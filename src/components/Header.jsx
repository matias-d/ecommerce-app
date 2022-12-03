
import { useState } from 'react';
import {
    RiSearchLine,
    RiUser3Line,
    RiHome2Line, 
    RiCodeFill, 
    RiArrowDropRightLine} 
    from 'react-icons/ri'
import { Link } from 'react-router-dom'


export const Header = () => {


    const options = ['Consolas', 'Deportes', 'Moda', 'Otros']

    const [dropDown, setDropDown] = useState({
        open : false,
    });


  return (
    <header className=' flex flex-col md:flex-row justify-around items-center text-base-dark py-4 gap-4 md:gap-0 border border-b-base-dark/5'>
        <Link to='/ecommerce-app'>
        <div className='flex gap-2 items-center'>
            <img src='https://cdn-icons-png.flaticon.com/512/5248/5248390.png' className='w-10 h-10'/><h1 className='font-bold tracking-widest text-lg'>ECO<span className='text-base-ligth'>M</span></h1>
        </div>
        </Link>
        <nav className='order-1 md:order-none'>
            <ul className='flex'> 
                <li><Link to='/ecommerce-app' className='text-sm font-semibold py-2 px-3 rounded-full hover:bg-base-dark/25  transition-all flex items-center gap-x-1'> <RiHome2Line className='font-bold text-lg text-base-ligth'/> Inicio</Link></li>
                <li><a href='https://github.com/matias-d/ecommerce-app' target='blank' className='text-sm font-semibold py-2 px-3 rounded-full hover:bg-base-dark/25 transition-all flex items-center gap-x-1'> <RiCodeFill className='font-bold text-lg text-base-ligth'/> Sobre</a></li>
                <li onClick={() => setDropDown({...dropDown, open: !dropDown.open})} className='relative'>
                <p className='text-sm font-semibold py-2 px-3 rounded-tr-xl rounded-tl-xl hover:bg-base-dark/25 transition-all flex items-center cursor-pointer'>  Categorias <RiArrowDropRightLine className={`font-medium text-xl text-base-ligth ${dropDown.open && 'rotate-90'} transition-all `}/></p>
                {
                    dropDown.open && 
                    (
                        <div className='absolute bg-base-ligth  rounded-bl-xl  rounded-br-xl flex flex-col gap-y-2 w-28 z-40 overflow-hidden'>
                            {
                                options.map((option) => {
                                    return(
                                        <Link to={`/category/${option.toLocaleLowerCase()}`}>
                                            <div className='text-center cursor-pointer hover:border-l-4 hover:border-base-dark'>
                                                <p className='text-sm font-medium text-white  hover:bg-base-semilight/90  py-2 transition-all'>{option}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    )
                }
                </li>
            </ul>
         </nav>
        <div className='flex gap-x-3'>
            <form className='relative'>
                <input type='text' placeholder='Buscar productos' className='py-2 pl-8 pr-4 rounded-full border-none outline-none bg-base-dark/25 text-base-dark text-sm'/>
                <RiSearchLine className='absolute top-1/2 -translate-y-1/2 left-2 font-bold text-base-ligth'/>
            </form>
            <Link to='/auth/login'>
                <button className='bg-base-dark/25 py-2.5 px-3 rounded-full hover:bg-base-dark/30 transition-all hover:scale-105'><RiUser3Line className='text-base-ligth'/></button>
            </Link>
        </div>
     </header>
    
  )
}
