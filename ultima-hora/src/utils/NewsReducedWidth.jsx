import {useState, useEffect, useRef, useContext} from 'react'
import { Link } from 'react-router-dom'

import dummy from "../assets/news_img/dummy.jpg"
import { ColumnCTA } from './ColumnCTA.jsx'
import { Cover } from './Cover.jsx'
import { MiddleNews } from './Middlenews.jsx'
import { LittleNews } from './LittleNews.jsx'
import { NewsContext } from '../App.jsx'

export function NewsReducedWidth(){

    useEffect(()=>{

    window.scrollTo(0,0)
      },[])

    const [dummyNews, setDummyNews]=useState({
        "general":[
            {
                "title":"What a wonderful news to be reading right???",
                "subtitle":"This is such an interesting news and you will love to read it. Give it a chance, come on",
                "author":"XXXXX, XXXXXXXX",
                "caption":"XXXXXX XXXXXXXXXXXXXXXXXX",
                "image":"../assets/news_img/dummy.jpg"
            }
        ]
    })


    const {useNewsReducedWidth}=useContext(NewsContext)
    const {news}=useNewsReducedWidth()

    console.log(news)
        
        
        return  <>

        <section className='w-full bg-stone-100 p-10  flex flex-col '>

            <Link to={`${news?.cover[0]?.news_id==0?'/':`/news/${news?.cover[0]?.news_id}`}`}> 
            <Cover title={news?.cover[0]?.title}
            subtitle={news?.cover[0]?.subtitle}
            author={news?.cover[0]?.username}
            caption={news?.cover[0]?.caption}
            image={`http://localhost:3000${news?.cover[0]?.image}`}
            height={'auto'}
            width={'100%'} >

            </Cover>
            </Link>

            {news?.firstMiddle && news?.firstMiddle?.map((n)=>{

                return <Link to={`${n.news_id==0?'/':`/news/${n.news_id}`}`}> 
                <MiddleNews title={n.title}
            author={n.username}
            image={`http://localhost:3000${n.image}`}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>
            </Link>
            })}


            <div className='w-full border-y-8 border-double border-stone-200 py-5 text-center font-extrabold text-4xl tracking widest'>OPINIÓN</div>

            <article className='flex flex-col gap-10'>
                 {news?.columns && news?.columns?.map((n)=>{

                return  <Link to={`${n.news_id==0?'/':`/news/${n.news_id}`}`}>
                <ColumnCTA image={`http://localhost:3000${n.image}`} section="Opinión" author={n.username}
                title={n.title}
                content={n.content.slice(0,200)}
               heightPassed={`100%`}
               widthPassed={`${100}%`}>
                </ColumnCTA>
                </Link>
            })}


                </article>

                {news?.body && news?.body?.map((n)=>{

                return <Link to={`${n.news_id==0?'/':`/news/${n.news_id}`}`}>
                <LittleNews title={n.title}
            author={n.username}
            image={`http://localhost:3000${n.image}`}
            height={'auto'}
            width={'100%'}>
            </LittleNews>
            </Link>
            })}


            <div className='w-full border-y-8 border-double border-stone-200 py-5 text-center font-extrabold text-4xl tracking widest my-10'>LO MÁS LEÍDO</div>

            {news?.secondMiddle && news?.secondMiddle?.map((n, index)=>{

                return <Link to={`${n.news_id==0?'/':`/news/${n.news_id}`}`}>
                <div className='w-1/2 m-auto border-b-8 border-double border-red-800 py-5 text-center font-extrabold text-4xl tracking widest'>{index+1}</div>
            <MiddleNews title={n.title}
            author={n.username}
            image={`http://localhost:3000${n.image}`}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>
            </Link>
            })}
            


            <div className='w-full mt-5 h-280  bg-[url(./assets/logos/red-marble.jpg)] bg-stone-500 bg-blend-multiply bg-center bg-size-[1000px] relative flex flex-col items-center justify-start gap-5 pt-10 '>
            <p className='text-[170px] font-[Monoton] text-red-700 sticky top-0 pb-25'>G</p>
                    <p className='text-4xl font-[Monoton] text-stone-200 -mt-30'>A</p>
                    <p className='text-9xl font-[Monoton] text-red-700 sticky top-55'>Z</p>
                    <p className='text-5xl font-[Monoton] text-stone-200'>E</p>
                    <p className='text-5xl font-[Monoton] text-stone-200'>T</p>
                    <p className='text-5xl font-[Monoton] text-stone-200'>A</p>
            </div>
             

        </section>



        </>

}