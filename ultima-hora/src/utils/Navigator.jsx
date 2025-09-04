import {useState, useEffect, useRef, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { NewsContext } from '../App.jsx'

import gazetaLogo from "../assets/logos/gazeta-logo.png"



export function Navigator(){

   const {useLogin}=useContext(NewsContext)

const {registered, logOut, registeredInfo}=useLogin()

const navigate=useNavigate()


    const [sections, setSections]=useState([
        
        'Carrera',
        'Amor',
        'Gente',
        'Opinión',
        'En pasado'
    ])

    const [dummyTitles, setDummyTitle]=useState([
              {
                "date":"01-01-2001",
                "title":"This is such amazing news..."
              },
              {
                "date":"01-01-2001",
                "title":"This is such amazing news..."
              },
              {
                "date":"01-01-2001",
                "title":"This is such amazing news..."
              },
              {
                "date":"01-01-2001",
                "title":"This is such amazing news..."
              },
              {
                "date":"01-01-2001",
                "title":"This is such amazing news..."
              },

    ])



   

    let sectionsNavigatorRef=useRef(`${(1/sections.length+2)*100}%`)
    let titlesNavigatorRef=useRef(`w-1/${dummyTitles.length}`)


    return <section className="  h-20 flex flex-col  w-full lg:h-70  ">

        <div className='border-b-red-800 border-b-4 lg:border-0  w-full  h-full lg:h-2/5  px-10 relative flex flex-row justify-end items-center '>

        <div className=' absolute  left-5 lg:left-0 w-70 h-full  flex justify-start lg:w-full lg:justify-center items-center'>
                <div className='  h-2/4 text-left  text-xl sm:text-3xl w-1/8  flex items-center   lg:hidden'>
                <p className='font-[Monoton] font-bold'><i class="fa-solid fa-bars"></i></p>
                </div>
                <div className='  h-2/4 text-center text-xl sm:text-3xl w-1/6 min-w-20 sm:min-w-40 flex items-center   lg:h-2/3 lg:text-center lg:text-7xl lg:w-1/3'>
                <p className='font-[Monoton] font-bold'>GAZETA</p>
                </div>
        </div>
            <div className="w-50 h-2/3 flex flex-row justify-end items-center divide-x-2 gap-5  divide-stone-200 ">
                <i onClick={()=>{
                        navigate('/login')
                }} className={`${registered?'opacity-0':''} fa-solid fa-arrow-right-to-bracket cursor-pointer z-10  text-black w-1/2 text-center text-sm`}></i>
                

                <img onClick={()=>{

                navigate(`/user/${registeredInfo?.username}`)
                }} className={`${registered?'':'hidden'} z-10 rounded-full w-15 h-15  cursor-pointer  `} src={`http://localhost:3000${registeredInfo?.image}`} alt="" />

                <div className='p-2 flex items-center '>
                <button onClick={()=>{
                        navigate('/register')
                }}  className={` ${registered?'hidden':''} text-center cursor-pointer z-10 text-sm h-8 md:h-full  bg-red-800 text-white rounded-md p-2 font-bold tracking-widest`}>REGISTRATE</button>
                <button onClick={()=>{
                        logOut()
                }} className={`${registered?'':'hidden'} text-center cursor-pointer z-10 text-sm h-8 md:h-full  bg-red-800 text-white rounded-md p-2 font-bold tracking-widest`}>ABANDONA</button>
                </div>
            </div>

        </div>

        <div className={`hidden w-full h-1/2 lg:h-1/5 lg:flex border-t-red-800 border-t-4 `}>

         <div style={{width:sectionsNavigatorRef.current}} className={`  text-black  border-r-2 border-r-red-800 cursor-pointer hover:underline text-lg font-bold tracking-widest flex items-center justify-center`}>
                <p><i class="fa-solid fa-house"></i></p>
        </div>

        {sections && sections.map((s)=>{
             return <div style={{width:sectionsNavigatorRef.current}} className={`  text-black  cursor-pointer hover:underline text-lg font-bold tracking-widest flex items-center justify-center`}>
                <p>{s}</p>
        </div>

        })}

        <div style={{width:sectionsNavigatorRef.current}} className={` text-black  border-l-2 border-l-red-800 cursor-pointer hover:underline text-lg font-bold tracking-widest flex items-center justify-center`}>
                <p><i class="fa-solid fa-magnifying-glass"></i></p>
        </div>
        

        
        </div>
        <div className=' hidden lg:flex lg:w-full h-2/5 bg-green-200 '>
        
                <div class='w-7/8 flex divide-x-2 divide-stone-300  bg-red-800'>

        {dummyTitles && dummyTitles.map((s)=>{
             return <div className={` ${titlesNavigatorRef.current} text-white p-2    text-sm  flex flex-col items-start gap-2 justify-start`}>
                <p class='text-stone-200 opacity-9/10 text-xs'>{s.date}</p>
                <p class='hover:underline cursor-pointer'>{s.title}</p>
        </div>

        })}
                </div>
                <div className={`w-1/8 text-white bg-red-700 p-2 border-l-4 border-l-stone-500 text-sm  flex flex-col items-end justify-end`}>
                
                <p class='hover:underline cursor-pointer tracking-widest font-extrabold text-sm'>VER MÁS...</p>
                </div>
      
        
        </div>




    
    </section>
}
