import {useState, useEffect} from 'react'

export function Footer(){

    const [sectionsVisibility, setSectionsVisibility]=useState({

        "secciones":{
            "visibility":false
        },
        "diarios":{
            "visibility":false
        }
    })

    const handleVisibility=function(section){
        
         let newVisibility=sectionsVisibility

         newVisibility[section].visibility=!newVisibility[section].visibility
       let newww={...newVisibility}
      
   
         setSectionsVisibility(newww)

    }

    return <section className=' bg-red-800'>
        <h1 className='w-full pt-5 lg:text-left text-center lg:pl-10 text-6xl   text-black font-[Monoton]'>GAZETA</h1>
  <section className='w-full grid grid-cols-1 lg:grid-cols-3 h-auto lg:h-100 p-10 gap-5 lg:gap-10  '>


        <div className='col-span-1   flex flex-col h-ful lg:justify-start justify-center items-center lg:items-start'>
            <h1 onClick={()=>{
                handleVisibility('secciones')
            }} className=' text-2xl md:text-4xl text-center lg:text-start font-bold text-white tracking-widest cursor-pointer mb-5'>SECCIONES <i className={`fa-solid ${sectionsVisibility.secciones.visibility?'fa-caret-up':'fa-caret-down'}  inline-block lg:opacity-0 opacity-90`}></i></h1>
            <div className={` ${sectionsVisibility.secciones.visibility?'h-full mb-5':'hidden lg:flex'} transition-all duration-150 flex flex-col items-center lg:items-start`}>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >General</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Carrera</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Amor</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Gente</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Opinión</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >En pasado</h4>
            </div>
        </div>
        <div className='col-span-1  flex flex-col h-ful lg:justify-start justify-center items-center mb-10 lg:mb-0 lg:items-start'>

            <h1 onClick={()=>{
                handleVisibility('diarios')
            }}  className='text-2xl md:text-4xl w-full text-center lg:text-start font-bold text-white tracking-widest cursor-pointer mb-17 lg:mb-5'>DIARIOS EN TENDENCIA <i class={`fa-solid ${sectionsVisibility.diarios.visibility?'fa-caret-up':'fa-caret-down'} lg:opacity-0 opacity-90 inline-block`}></i></h1>
           <div className={`${sectionsVisibility.diarios.visibility?'h-full':'hidden lg:flex'}  transition-all duration-150 flex flex-col items-center lg:items-start gap-3 `}>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Diario de los diegos</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Les amis</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Los chicos</h4>
            <h4 className='text-lg text-red-50 hover:underline underline-offset-2 mb-3 cursor-pointer' >Les gars</h4>
            </div>
        </div>

        <div className='col-span-1  flex flex-col justify-start items-center lg:items-start'>

                <div className='w-full flex flex-row justify-center lg:gap-0 gap-15 lg:justify-around h-30'>

                    <i class="fa-brands fa-facebook text-red-100 text-2xl"></i>
                    <i class="fa-brands fa-instagram text-red-100 text-2xl"></i>
                    <i class="fa-brands fa-twitter text-red-100 text-2xl"></i>
                </div>
                <div className='flex flex-col w-full justify-start items-center lg:items-start'>

                    <h2 className='text-white font-thin text-xs mb-5 tracking-wide'>This is a newspaper created by David Sánchez with no commercial purpose</h2>
                    <h2 className='text-white font-thin text-xs mb-5 tracking-wide'>Gazeta was created as way to engage younger generations in writing and communication</h2>
                    <h2 className='text-white font-thin text-xs mb-5 tracking-wide'>Feel free to use, share and enjoy!</h2>
                </div>

        </div>



    </section>

    </section>
}