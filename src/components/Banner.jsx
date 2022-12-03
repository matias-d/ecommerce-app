
import {RiShoppingBagLine} from 'react-icons/ri'

import SvgComponent from './svg/Arrow'

 
export const Banner = () => {



  return (
    <section className='flex flex-col md:flex-row w-full lg:h-[82vh] md:items-center  py-6 justify-center '>
            
            <div className='flex flex-col gap-y-4  items-center lg:items-start lg:text-start text-center relative'>
              <SvgComponent className='absolute right-36 rotate-180 hidden lg:block' />
                <RiShoppingBagLine className='text-xl lg:text-3xl text-base-primary bg-base-ligth rounded-full box-content p-2'/>
                <h1 className=' text-xl lg:text-5xl font-bold w-72 lg:w-[18ch] text-base-dark'>Febrero <span className='text-base-ligth '>Promocional</span> en todos los productos<span className='text-base-ligth'>.</span></h1>
                <p className='text-base-dark font-semibold w-72'>En tus productos seleccionados contas hasta con un 33% de descuento, <span className='text-base-ligth hover:underline'>¿Te lo vas a perder?</span></p>
                <button  className='bg-base-ligth py-2 px-3 rounded-full text-base-primary font-semibold w-56 hover:bg-base-semilight transition-all hover:tracking-widest shadow-md shadow-base-ligth/50 text-center cursor-pointer'>Ver mas</button>
            </div>
            <img src='https://i.postimg.cc/HW0QK2sD/Transaction-Flatline.png' alt='banner' className='  w-full md:h-72 md:w-72 lg:h-[500px] lg:w-[500px]  '/>
    </section>
  )
}
