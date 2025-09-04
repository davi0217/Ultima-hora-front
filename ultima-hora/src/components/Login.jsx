import {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {NewsContext} from '../App.jsx'


export function Login(){

    const navigate=useNavigate()

    const handleNavigation=function(route){
        navigate(route)
    }


    const {useLogin}=useContext(NewsContext)

    const {checkRegistered, registered}=useLogin()

    console.log('is registered? '+registered)


    return <section className='pb-20'>

    <div className='w-full text-center py-10   border-b-red-800 border-double border-b-8 font-[Monoton] text-6xl'>
        <h1>Gazeta</h1>
    </div>

    <div className='lg:w-2/5 md:w-3/5 w-4/6 bg-stone-100  shadow-lg m-auto mt-10'>

    <h1 className='w-full text-center font-extrabold tracking-widest text-md md:text-xl py-5 text-stone-600 border-b-stone-200 border-b-2 '>INICIA SESIÓN</h1>

    <form className='w-full p-5' action='post' onSubmit={(e)=>{
        e.preventDefault()
        

        fetch('http://localhost:3000/login',
            {
                method:'POST',
                headers:{'Content-Type':'application/json; charset=utf-8'},
                body:JSON.stringify({
                    username:e.target.name.value,
                    user_password:e.target.password.value,
                })
            }
        ).then((r)=>{
            console.log(r)
            return r.json()
        }).then((r)=>{
            console.log(r)
            if(r){
                localStorage.setItem('token', r.token)
                console.log('im just registered')
                handleNavigation('/')
            }
        })
    }}>

        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Usuario o email</label>
        <input type="text" name='name' id='name' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="password">Contraseña</label>
        <input type="password" name='password' id='password' className='w-full h-10 border-2 border-red-800 mt-4 px-5 ' />
        <div className='w-full text-right  '>
        <input type="submit" value='Acceder' className='w-1/2 h-10 m-auto  transition-all duration-150 bg-red-800 mt-8 text-center text-white hover:bg-white hover:text-red-800 hover:outline-2 cursor-pointer  hover:outline-red-500 rounded-lg ' />
        </div>
    </form>
    
    </div>


    </section>
}