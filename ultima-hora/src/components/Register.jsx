import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export function Register(){

    const [error,setError]=useState(
        {
            type:'',
            text:''
        }
    )

    function handleError(type, text){

setError({type:type, text:text})

    }
    useEffect(()=>{

window.scrollTo(0,0)
  },[])


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

    <form className='w-full p-5' onChange={()=>{
        handleError('','')
    }} action="post" encType='multipart/form-data' onSubmit={(e)=>{

        e.preventDefault()

       

     

        if(e.target.password.value!=e.target.passwordRepeat.value){
            handleError('password','La contraseña no coincide')
            return 
        }

        const data= new FormData()

        data.append("file", e.target.profile.files[0])
        data.append('info',JSON.stringify({
                    username:e.target.username.value,
                    user_password:e.target.password.value,
                    country:e.target.country.value,
                    city:e.target.city.value,
                    email:e.target.email.value,
                    name:e.target.name.value,
                    surname:e.target.surname.value
                }))

       

      


        fetch('http://localhost:3000/register',
            {
                method:'POST',
                body:data
            }
        ).then((r)=>{
            console.log(r)
            return r.json()
        }).then((r)=>{
            console.log(r)
            
            if(r){
                if(!r.token){
                    handleError('repeatedUsername','El nombre de usuario ya existe')
                    window.scrollTo(0,0)
                    return 
                }
                localStorage.setItem('token', r.token)
                console.log('im just registered')
            handleNavigation('/') 
            }
        }).catch((error)=>{
            return 
        })

    }

    }>
        <h1 className={` ${error?.type=='repeatedUsername'?'':'opacity-0'} w-full h-15 text-center font-bold tracking-widest text-[13px] md:text-lg py-5 text-red-500   `}>{error.text}</h1>
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

        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500 ' htmlFor="password">Selecciona una foto</label>
        <input  type="file" name='profile' required id='profile' accept='.jpg, .jpeg, .png'  className='w-full cursor-pointer my-5 h-10 bg-red-800 p-2 rounded-md text-white ' />
        <h1 className={` ${error?.type=='password'?'':'opacity-0'} w-full h-15 text-center font-bold tracking-widest text-[13px] md:text-lg py-5 text-red-500   `}>{error.text}</h1>

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