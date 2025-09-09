import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useLogin} from '../hooks/useLogin'

export function CreateHeader(){

    useEffect(()=>{

window.scrollTo(0,0)
  },[])

    const [groups, setGroups]=useState()

    const {registeredInfo}=useLogin()

    useEffect(()=>{

        async function fetchGroups(){
             let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
            fetch(`http://localhost:3000/groups/search?username=${registeredInfo.username}`,{

                method:'GET',
                headers:{
                    'Authorization':'Bearer '+auth
                }
               
            }).then((r)=>{return r.json()}).then((r)=>{

                console.log(r)
                setGroups(r)
            })
        }

fetchGroups()


    },[registeredInfo])

    const [publico, setPublico]=useState(false)

    const togglePublico=function(){
        setPublico(!publico)
    }

    const navigate=useNavigate()

    const handleNavigation=function(route){
        navigate(route)
    }

    return <section className='pb-20'>

    <div className='w-full text-center py-10   border-b-red-800 border-double border-b-8 font-[Monoton] text-6xl'>
        <h1>Gazeta</h1>
    </div>

    <div className='lg:w-2/5 md:w-3/5 w-4/6 bg-stone-100  shadow-lg m-auto mt-10'>

    <h1 className='w-full text-center font-extrabold tracking-widest text-md md:text-2xl mb-5 py-5 text-red-800 border-b-2 '>Crea una nueva cabecera</h1>
    <h2 className='w-full text-center font-extrabold tracking-widest text-md md:text-xl py-5 px-5 text-stone-600 border-b-stone-200 border-b-2 '>Tu último examen, la nueva receta que has descubierto, la aventura que nunca llegaste a contar por completo... <br /> <br />Crea una nueva cabecera para que tú y todos los miembros de tu grupo no perdáis detalle de la vida de los demás</h2>

    <form className='w-full p-5 text-center' action="post" onSubmit={(e)=>{

        e.preventDefault()

     let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';

        fetch('http://localhost:3000/create-header',
            {
                method:'POST',
                headers:{'Content-Type':'application/json; charset=utf-8',
                    'Authorization':'Bearer '+auth
                },
                body:JSON.stringify({
                        "name":e.target.name.value,
                        "isPublic":publico?1:0,
                        "group":e.target.group.value,
                        "description":e.target.description.value
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

        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Nombre de la nueva cabecera</label>
        <input type="text" name='name' required id='name' maxLength={20} className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="name">Una descripción breve</label>
        <input type="text" name='description' required id='desciption' maxLength={300} className='w-full h-10 border-2 border-red-800 my-4 px-5 ' />
        <label className='font-bold text-sm sm:text-xl tracking-wide text-stone-500' htmlFor="publico">Público</label>
        <input type="checkbox" name='publico'  id='publico' checked={publico} onChange={(e)=>{
            togglePublico(e.target.value)
        }} className='w-full h-6 border-2 border-red-800 mt-5 mb-9 px-5 ' />
        <div className='w-full flex flex-col items-center gap-4'>
        <label className='font-bold text-xs sm:text-xl tracking-wide text-stone-500' htmlFor="group">Selecciona uno de tus grupos </label>
        <select className='text-red-800 p-2 font-extrabold cursor-pointer tracking-widest text-md'  name="group" id="group" required>
            {groups && groups.map((g)=>{

                if(g.headerName!=''){return}
                return <option className='tracking-widest cursor-pointer hover:!bg-red-800 hover:!text-white p-3 text-sm font-bold text-red-800' value={g.groupName}>{g.groupName}</option>
            })}
        </select>
        <p className='p-2 text-md mt-4 font-thin text-stone-500'>¿Todavía no tienes un grupo? Crea uno <Link to='/create-group'><span className='underline underline-offset-2 font-extrabold text-stone-600 cursor-pointer'>aquí</span></Link></p>
        </div>
       <input className='font-[Saira] font-extrabold text-red-900 border-2 border-red-800 p-3 rounded-md hover:text-white mt-15 hover:bg-red-800 cursor-pointer transition-all duration-100' type="submit" value='Crear cabecera' />
    </form>
    
    </div>


    </section>
}