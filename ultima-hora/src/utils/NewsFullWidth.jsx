import {useState, useEffect, useRef, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import {NewsContext} from '../App.jsx'

import dummy from "../assets/news_img/dummy.jpg"
import { ColumnCTA } from './ColumnCTA'

export function NewsFullWidth(){

    useEffect(()=>{

window.scrollTo(0,0)
  },[])

  const params=useParams()

   

    const {useNewsFullWidth, useLogin}=useContext(NewsContext)
    const {news, mostLiked}=useNewsFullWidth()
    const {registeredInfo}=useLogin()

  console.log(news)
   function giveLink(news_id){

    if(news_id==0 ){
            if(registeredInfo?.username){
                return `/user/${registeredInfo?.username}`
            }else{
                return '/login'
            }

    }else{

        if(params.header){
            return `/news/${params.header}/${news_id}`
        }else{
            return `/news/${news_id}`
        }

    }


   }
      

    
        
        
        return  <section className='w-full '>
    {params.section=='Opinión' && <article>
    
    <div className=' h-auto flex justify-center gap-3 w-full p-5  '>

            {news && news.allColumns?.slice(0,3).map((n)=>{

                return <Link to={giveLink(n.news_id)}> 
            
            <ColumnCTA image={`http://localhost:3000/${n?.image}`} section="Opinión" author={n?.username}
                title={n?.title}
                content={`${n?.content.slice(0,80)} ... [ + ]`}
               heightPassed={`500px`}
               widthPassed={`2/5`}>
                </ColumnCTA>
                </Link>


            })}
        
        </div>

    <div className=' h-auto flex justify-center gap-3 w-full rounded-lg text-shadow-amber-700 shadow-2xl  bg-red-800 p-5'>

            {news && news.allColumns?.slice(3,5).map((n)=>{

                return <Link to={giveLink(n.news_id)}> 
            
            <ColumnCTA image={`http://localhost:3000/${n?.image}`} section="Opinión" author={n?.username}
                title={n?.title}
                content={`${n?.content.slice(0,80)} ... [ + ]`}
               heightPassed={`380px`}
               widthPassed={`1/2`}>
                </ColumnCTA>
                </Link>


            })}
        
        </div>
    <div className=' h-auto flex flex-wrap justify-center gap-3 w-full p-5  '>

            {news && news.allColumns?.slice(5,15).map((n)=>{

                return <Link to={giveLink(n.news_id)}> 
            
            <ColumnCTA image={`http://localhost:3000/${n?.image}`} section="Opinión" author={n?.username}
                title={n?.title}
                content={`${n?.content.slice(0,80)} ... [ + ]`}
               heightPassed={`480px`}
               widthPassed={`200px`}>
                </ColumnCTA>
                </Link>


            })}
        
        </div>
        </article>
        }
      { params.section!='Opinión' && <section>
       <article className='bg-stone-100  h-200 p-5 grid grid-cols-9 gap-3 w-full overflow-hidden '>

            <div className='col-span-4 p-1 overflow-hidden   w-full flex flex-wrap gap-1 items-start'>

                <Link to={giveLink(news?.cover[0]?.news_id)}><div className='h-7/10 w-full cursor-pointer  overflow-hidden'>

                <h1 className='h-auto w-full   text-4xl  font-extrabold mb-5  tracking-wide'> <span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{news?.cover[0]?.title}</h1>
                <img className='w-400 h-70 object-cover mb-5' src={`http://localhost:3000/${news?.cover[0]?.image}`} alt="" />
                <h2 className='h-auto w-full  font-bold mb-5 text-stone-500 text-lg break-auto hyphens-auto  '>{news?.cover[0]?.subtitle} </h2>
                
                
                </div></Link>

                <div className='h-3/10 w-full  grid grid-cols-2 gap-5 '>

               <Link to={giveLink(news?.cover[1]?.news_id)}>  <div className='col-span-1 h-full  overflow-hidden'>
                                    <h2 className=' w-full text-stone-700  font-bold text-sm break-all   '> <span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{news?.cover[1]?.content.slice(0,150)} ... [ + ] </h2>
                </div>
                </Link>
                <Link to={giveLink(news?.cover[2]?.news_id)}>
                <div className='col-span-1 h-full  overflow-hidden'>
                                    <h2 className=' w-full text-stone-700   font-bold text-sm break-all  '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{news?.cover[2]?.content.slice(0,200)} ... [ + ]  </h2>

                </div>
                </Link>
                

                </div>


            </div>
            <div className='col-span-2 overflow-hidden h-200 flex flex-wrap divide-y-2 divide-stone-400'>
                   <Link to={giveLink(news?.cover[3]?.news_id)}>
                    <div className='h-100 w-full p-2  py-4  overflow-hidden'>

                    <img className='object-cover h-1/3 w-300 mb-5' src={`http://localhost:3000/${news?.cover[3]?.image}`} alt="" />
                    <h1 className='font-extrabold overflow-hidden break-auto text-2xl tracking-wide '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{news?.cover[3]?.title}</h1>
                    </div>
                    </Link>

                    <Link to={giveLink(news?.cover[4]?.news_id)}> 
                    <div className='h-100 w-full  p-2 py-4  overflow-hidden'>

                    <img className='object-cover h-1/3 w-300 mb-5' src={`http://localhost:3000/${news?.cover[4]?.image}`} alt="" />
                    <h1 className='font-extrabold overflow-hidden break-auto text-2xl tracking-wide '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{news?.cover[4]?.title}</h1>
                    </div>
                    </Link>

            </div>
            <div className='col-span-3 flex flex-wrap items-start '>
                <Link to={giveLink(news?.columns[0]?.news_id)}>
                <ColumnCTA image={`http://localhost:3000/${news?.columns[0]?.image}`} section="Opinión" author={news?.columns[0]?.username}
                title={news?.columns[0]?.title}
                content={`${news?.columns[0]?.content.slice(0,200)} ... [ + ]`}
               heightPassed={`550px`}
               widthPassed={`${100}%`}>
                </ColumnCTA>
                </Link>



                <div className='h-2/8 w-full bg-red-100 p-5 flex flex-col justify-start items-start gap-4'>

                <h1 className='text-lg font-bold tracking-widest underline underline-offset-2 text-stone-700'>Diario de mikas</h1>
                <h2 className='text-sm '>Descubre uno de los diarios del grupo del momento: Los mikas</h2>
                <h3 className='text-md text-right w-full cursor-pointer tracking-widest font-bold text-red-800 hover:underline hover:text-red-950 '>Saber más <i class="fa-solid fa-arrow-right"></i></h3>

                
                </div>

            </div>

        
        </article>

            <article className='bg-stone-100 p-5 min-h-200 h-auto  w-full flex flex-row justify-between'>

                <div className='w-3/4  pt-10  border-double  border-t-red-800 border-t-8 flex flex-row flex-wrap '>

                <div className='w-full pb-5 border-b-red-800 border-b-2  h-95 grid grid-cols-3 gap-10 overflow-hidden'>

        {/*aquí va haber que hacer un map para estas tres columnitas*/}

        {news && news.middle?.map((n)=>{

            return <Link to={giveLink(n.news_id)}> 
            <div className='col-span-1  h-full '>

                        <img  className='h-2/5 w-300 object-cover mb-5' src={`http://localhost:3000/${n?.image}`} alt="" />
                        <h2 className='text-lg font-extrabold mb-5'><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{n?.title}</h2>
                       
                    
                    </div>
                </Link>

        })}
                </div>

                <div className='w-full min-h-60 h-auto grid grid-cols-2 gap-5 p-5 '>

                    {news && news.body?.map((n)=>{

            return    <Link to={giveLink(n.news_id)}>
             <div className=' border-t-2 border-stone-200 h-35 col-span-1 flex gap-3 justify-between p-5'>
                        <h1 className='text-md space-y-0.5 font-semibold w-3/5 '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{n?.title}</h1>
                        <img className='w-2/5 h-full object-cover' src={`http://localhost:3000/${n?.image}`} alt="" />
                    </div>
                            </Link>
        })}
                    
                    
                </div>


                </div>
                <div className='w-1/5   relative'>
                <div className=' bg-gradient-to-r from-stone-100 to-red-200  sticky top-25 w-full h-120 text-center py-5'>
                    <p className='text-9xl font-[Monoton] text-red-800'>G</p>
                    <p className='text-4xl font-[Monoton]'>A</p>
                    <p className='text-9xl font-[Monoton] text-red-800'>Z</p>
                    <p className='text-5xl font-[Monoton]'>E</p>
                    <p className='text-5xl font-[Monoton]'>T</p>
                    <p className='text-5xl font-[Monoton]'>A</p>
                    
                </div>
                
                </div>
            </article>

            <article className='h-150 bg-stone-100 p-10' >

                <h1 className='text-2xl mb-5 font-extrabold tracking-widest border-b-black border-b-2 w-1/2'>OPINIÓN</h1>
                <div className='w-full h-full grid grid-cols-4 gap-5'>

                    {/* esto se mapea en cuanto podamos también */}


              {news && news.columns?.slice(1, news?.columns?.length-1).map((n)=>{

            return <Link to={giveLink(n.news_id)}> 
            
            <ColumnCTA image={`http://localhost:3000/${n?.image}`} section="Opinión" author={n?.username}
                title={n?.title}
                content={`${n?.content.slice(0,80)} ... [ + ]`}
               heightPassed={`${9/10*100}%`}
               widthPassed={``}>
                </ColumnCTA>
                </Link>


                     })}

                   

                </div>

            </article>

            </section>}

            { params.section!='Opinión' && <article className='h-auto min-h-100 bg-stone-100 p-10' >

                <h1 className='text-2xl mb-5 font-extrabold tracking-widest border-b-black border-b-2 w-1/2'>LO MÁS VALORADO</h1>
                <div className='w-full h-full grid grid-cols-3 gap-5'>

                    {/* esto se mapea en cuanto podamos también */}

                    {mostLiked && mostLiked.map((l, index)=>{

                        return <Link to={giveLink(l.news_id)}>
                         <div className='relative col-span-1 h-30 p-5 bg-stone-100 text-right '>

                        <div className='absolute text-9xl top-0 h-40 w-30 text-center z-10 font-extrabold opacity-60 text-stone-900 left-0 '>{index+1}</div>
                        <div className='w-4/5 h-4/5 p-4 bg-stone-200 absolute bottom-0 right-0 text-right flex items-end justify-end '>
                        <h1 className='text-md space-y-0.5 font-semibold w-full text-right '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{l.title}</h1>
                        
                        </div>

                    </div>
                    </Link>
                    })}

                    
                  

                </div>

            </article>}

    
</section>
}