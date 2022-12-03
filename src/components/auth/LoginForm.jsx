import React, { useState } from 'react'
import {
    RiMailLine, 
    RiLockLine,
    RiEyeLine,
    RiEyeOffLine
  } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.email === 'user@gmail.com' && user.password === 'admin123'){
            navigate('/menu')
            setErrorMessage(false)
        }else{
            setErrorMessage(true)
        }
    }

    const useMessage = () => {
        setTimeout(() => {
            setErrorMessage(false)
        }, 2000)
        return(
            <h1  className='text-sm font-medium text-red-400'>Credenciales incorrectas</h1>
        )
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 bg-base-primary py-14 px-16  rounded-xl items-center shadow-xl '>
        <h2 className='text-2xl font-medium text-base-dark mb-4'>Iniciar <span className='text-base-ligth'>Sesion</span></h2>
        <div className='relative'>
        <input type='email' name='email' placeholder='Escriba su correo electronico' required className={`py-2 pl-8 pr-12 bg-base-dark/20  rounded-xl md:w-96 outline-none text-base-dark ${errorMessage && 'border border-red-400'} `} onChange={(e) => handleChange(e)}/>
            <RiMailLine className='text-lg font-medium text-base-ligth absolute top-1/2 -translate-y-1/2 left-2'/>
        </div>
        <div className='relative'>
        <input type={showPassword ? 'text' : 'password'} placeholder='Escriba su contraseña' name='password' required className={`py-2 pl-8 pr-12 bg-base-dark/20 rounded-xl md:w-96 outline-none text-base-dark  ${errorMessage && 'border border-red-400'} `} onChange={(e) => handleChange(e)}/>
            <RiLockLine className='text-lg font-medium text-base-ligth absolute top-1/2 -translate-y-1/2 left-2'/>
            {showPassword ?<RiEyeOffLine className='text-lg font-medium text-base-ligth absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> :<RiEyeLine className='text-lg font-medium text-base-ligth absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>}
        </div>
        {   errorMessage &&
            useMessage()
            
        }
        <button type='submit' className='bg-base-ligth text-white py-2 px-3 rounded-xl  font-medium hover:bg-base-semilight shadow-lg text-sm shadow-base-ligth/20 w-56 hover:tracking-widest transition-all'>Ingresar</button>
        <div className='flex flex-col gap-2 items-center'>
            <h4 className='text-base-ligth hover:underline cursor-pointer'>¿Olvidaste tu contraseña?</h4>
            <h4 className='text-base-dark hover:underline cursor-pointer'>¿No tienes una cuenta?</h4>
        </div>
        </div>
</form>
  )
}
