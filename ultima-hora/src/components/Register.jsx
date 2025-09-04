import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export function Register(){


    const navigate=useNavigate()

    const handleNavigation=function(route){
        navigate(route)
    }

    return <section className='pb-20'>

    <div className='w-full text-center py-10   border-b-red-800 border-double border-b-8 font-[Monoton] text-6xl'>
        <h1>Gazeta</h1>
    </div>

    <div className='lg:w-2/5 md:w-3/5 w-4/6 bg-stone-100  shadow-lg m-auto mt-10'>

    <h1 className='w-full text-center font-extrabold tracking-widest text-md md:text-xl py-5 text-stone-600 border-b-stone-200 border-b-2 '>REGÍSTRATE</h1>

    <form className='w-full p-5' action="post" onSubmit={(e)=>{

        e.preventDefault()

        if(e.target.password.value!=e.target.passwordRepeat.value){
            console.log('password doesnt match')
            return 
        }


        fetch('http://localhost:3000/register',
            {
                method:'POST',
                headers:{'Content-Type':'application/json; charset=utf-8'
                },
                body:JSON.stringify({
                    username:e.target.username.value,
                    user_password:e.target.password.value,
                    country:e.target.country.value,
                    city:e.target.city.value,
                    email:e.target.email.value,
                    image:"./static/imgs/dummy.jpg",
                    name:e.target.name.value,
                    surname:e.target.surname.value
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

    }

    }>

        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Nombre de usuario</label>
        <input type="text" name='username' required id='username' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Nombre</label>
        <input type="text" name='name' required id='name' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Apellidos</label>
        <input type="text" name='surname' required id='surname' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="mail">Email</label>
        <input type="email" name='email' required id='email' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <div className='grid grid-cols-2 gap-2 w-full'>
        <div className='col-span-1'>
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="pais">País</label>
        <input type="text" name='country' id='country' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
       </div>
        <div className='col-span-1'>
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="ciudad">Ciudad</label>
        <input type="text" name='city' id='city' className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
       </div>
        </div>
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500 ' htmlFor="password">Contraseña</label>
        <input type="password" name='password' required id='password' className='w-full h-10 border-2 mb-4 border-red-800 mt-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="passwordRepeat">Repetir contraseña</label>
        <input type="password" name='passwordRepeat' required id='passwordRepeat' className='w-full h-10 border-2 border-red-800 mt-4 px-5 ' />
        <div className='w-full text-right'>
        <input type="submit" value='Acceder' className='w-1/2 h-10 m-auto transition-all duration-150 bg-red-800 mt-8 text-center text-white hover:bg-white hover:text-red-800 hover:outline-2 cursor-pointer  hover:outline-red-500 rounded-lg ' />
        </div>
    </form>
    
    </div>


    </section>
}