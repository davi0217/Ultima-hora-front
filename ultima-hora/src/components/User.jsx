import {useState, useEffect, useRef, useContext} from 'react'
import {useParams} from 'react-router-dom'


import {Navigator} from '../utils/Navigator.jsx'
import {Footer} from '../utils/Footer.jsx'
import dummy from "../assets/news_img/dummy.jpg"
import { NewsContext } from '../App.jsx'

export function User(){

    const {useUser, useLogin}=useContext(NewsContext)
    const {user, groupInfo, handleMemberVisibility, handleNewsVisibility}=useUser()

    const {registeredInfo}=useLogin()
    console.log(registeredInfo)

  
 

    const params=useParams()

    const [query, setQuery]=useState()

    useEffect(()=>{
        console.log(params)

        setQuery(params.query)

    },[params])

  

   


  /*   const toggleMembersVisibility=function(name){

        let newMembers= groups.map((g)=>{
            if(name==g.name){
                return {...g, visible:!g.visible}
            }
             else return g
        })
        setGroups(newMembers)
    } */


    return <>
    
    <Navigator></Navigator>

    <div className='w-full grid grid-cols-10  h-auto p-10 gap-10'>

        <div className=' col-span-8 col-start-2   md:col-span-6 md:col-start-3 lg:col-span-3 bg-stone-100 flex flex-col items-start justify-start p-3 max-h-150'>

            <img className='rounded-full h-30 object-cover w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/2 mb-6' src={`http://localhost:3000${user?.image}`} alt="" />
            <h1 className='font-extrabold tracking-widest w-full text-2xl'>{user?.username}</h1>
            <h1 className='font-bold w-full text-md border-b-2 pb-4 border-red-800'>{user?.city}, {user?.country}</h1>
            <h2 className='text-md pt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo eos labore autem quibusdam nostrum nisi aperiam et, recusandae sed fuga itaque voluptates cupiditate vero, ratione explicabo culpa eius blanditiis?
            Suscipit velit minus harum. Veniam porro facilis, numquam libero doloribus eligendi vitae sapiente qui. Nobis ex nisi, corrupti ipsam, rerum doloremque deserunt incidunt maxime quos modi molestias, quo sunt possimus?</h2>

        </div>

        <div className='col-span-10  lg:col-span-7 h-auto flex flex-col items-start justify-start gap-5'>

            {groupInfo && groupInfo.map((g)=>{


                    return <div className='w-full h-auto flex bg-stone-100 pb-5 flex-col justify-start items-start '>
                <div className='w-full  border-b-2 border-red-800 h-20'>
                <h1 className='text-4xl font-[Monoton] p-4 tracking-widest'>{g?.headerName}</h1>
                </div>
                <div className='w-full   h-auto'>
                <h2 className='text-sm md:text-lg  tracking-widest font-light   p-4'>Un diario del grupo <strong>{g?.groupName}</strong></h2>
                <h2 className='text-sm md:text-lg tracking-widest font-light   p-4'>{g.headerDescription}</h2>
                <div className='relative w-full p-4 '>
                    <p  onClick={()=>{
                        handleMemberVisibility(g.groupName)
                    }}  className='mb-5  tracking-widest cursor-pointer text-xs '>VER INTEGRANTES  <i className={`fa-solid ${g.showingMembers?'fa-caret-up':'fa-caret-down'}`}></i></p>
                    <ul className={`${g.showingMembers?'':'hidden'} text-red-800`}>
                        {g.members && g.members.map((m)=>{
                            return <li className='tracking-widest font-extrabold text-xs mb-2'>{m?.name?.toUpperCase()}</li>
                        })}                        
                    </ul>
                </div>
                <p onClick={()=>{
                    handleNewsVisibility(g.groupName)

                }} className={`${registeredInfo.username==user?.username?'':'hidden'} mt-5 w-full cursor-pointer text-right font-extrabold text-md tracking-widest text-red-800 p-5`}>AÑADIR NOTICIA +</p>
                </div>

                <div className={`${g.showingNews?'h-200':'h-0 '}  w-full overflow-hidden transition-all duration-200 `}>
                    <div className='pt-20 px-5 flex flex-col justify-center gap-5 items-center'>

                        <h1 className='font-extrabold mb-7 w-full tracking-widest text-xl text-red-800'>Publica una nueva noticia</h1>

                        <form className='flex  flex-col w-full justify-center items-center' action='post'  onSubmit={(e)=>{
                            e.preventDefault()

                            console.log(g?.headerName,e.target.section.value,"./static/imgs/dummy.jpg",e.target.title.value,
                                    e.target.subtitle.value,
                                     e.target.content.value,
                                    e.target.caption.value)

                            let auth=`Bearer ${localStorage.getItem('token')?localStorage.getItem('token'):''}`
                            fetch('http://localhost:3000/publish-news',{
                                method:'POST',
                                headers:{
                                    'Content-Type':'application/json; charset=utf-8',
                                    Authorization:auth
                                },
                                body:JSON.stringify({
                                    header: g?.headerName,
                                    section: e.target.section.value,
                                    image: "./static/imgs/dummy.jpg",
                                    title: e.target.title.value,
                                    subtitle: e.target.subtitle.value,
                                    content: e.target.content.value,
                                    caption: e.target.caption.value
                                    }  
                                )       
                            }).then((r)=>{
                                console.log(r)
                                return   r.json()}).then((r)=>{console.log(r)})
                        }}>

                        <label className='w-full min-h-10  text-left text-lg text-stone-800' htmlFor="title">Titular</label>
                        <input className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' type="text" name="title" id="title" maxLength={100} minLength={10} />
                        <label className='w-full min-h-10 text-left text-lg text-stone-800' htmlFor="subtitle">Subtítulo</label>
                        <input className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' type="text" name="subtitle" id="subtitle" maxLength={200} minLength={50}/>
                        <label className='w-full min-h-10  text-left text-lg text-stone-800' htmlFor="caption">Caption</label>
                        <input className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' type="text" name="caption" id="caption" maxLength={80} minLength={0}/>
                        <label className='w-full min-h-10 text-left text-lg text-stone-800' htmlFor="content">Texto</label>
                        <textarea className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' name="content" id="content" maxLength={2500} minLength={500}/>
                        <select className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' name="section" id="section">
                            <option value="Carrera" default>Carrera</option>
                            <option value="Amor">Amor</option>
                            <option value="Gente">Gente</option>
                            <option value="En pasado">En pasado</option>
                            <option value="Opinión">Opinión</option>
                        </select>

                        <input className='w-full mt-10 min-h-10 text-left text-lg text-stone-800' type="submit" />

                        </form>

                    </div>
                </div>

            </div>
            })}

            
           

        </div>
    </div>



    <Footer></Footer>
    
    
    
    
    
    
    </>
}
