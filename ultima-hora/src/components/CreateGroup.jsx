import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export function CreateGroup(){

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

    <h1 className='w-full text-center font-extrabold tracking-widest text-md md:text-2xl mb-5 py-5 text-red-800 border-b-2 '>Crea un nuevo grupo</h1>
    <h2 className='w-full text-center font-extrabold tracking-widest text-md md:text-xl py-5 px-5 text-stone-600 border-b-stone-200 border-b-2 '>Una vez definas tu nuevo grupo, podrás configurar la cabecera correspondiente y empezar a compartir tus noticas, en privado o en público. <br /> <br />No pierdas la oportunidad de añadir a tus amigos al grupo</h2>

    <form className='w-full p-5 text-center' action="post" onSubmit={(e)=>{

        e.preventDefault()

     let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';

        fetch('http://localhost:3000/create-group',
            {
                method:'POST',
                headers:{'Content-Type':'application/json; charset=utf-8',
                    'Authorization':'Bearer '+auth
                },
                body:JSON.stringify({
                    name:e.target.groupName.value,
                })
            }
        ).then((r)=>{
            console.log(r)
            return r.json()
        }).then((r)=>{
            console.log(r)
            
            if(r){
                console.log('i have just created a group')
                handleNavigation('/')
            }
        })

    }

    }>

        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Nombre del nuevo grupo</label>
        <input type="text" name='groupName' required id='groupName' maxLength={30} className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
       <input className='font-[Saira] font-extrabold text-red-900 border-2 border-red-800 p-3 rounded-md hover:text-white mt-5 hover:bg-red-800 cursor-pointer transition-all duration-100' type="submit" value='Crear grupo' />
    </form>
    
    </div>


    </section>
}