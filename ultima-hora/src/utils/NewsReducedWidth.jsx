import {useState, useEffect, useRef} from 'react'

import dummy from "../assets/news_img/dummy.jpg"
import { ColumnCTA } from './ColumnCTA.jsx'
import { Cover } from './Cover.jsx'
import { MiddleNews } from './Middlenews.jsx'
import { LittleNews } from './LittleNews.jsx'

export function NewsReducedWidth(){

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
        
        
        return  <>

        <section className='w-full bg-stone-100 p-10  flex flex-col '>

            <Cover title={dummyNews.general[0].title}
            subtitle={dummyNews.general[0].subtitle}
            author={dummyNews.general[0].author}
            caption={dummyNews.general[0].caption}
            image={dummy}
            height={'auto'}
            width={'100%'} >

            </Cover>

            <MiddleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>
            <MiddleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>
            <MiddleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>

            <div className='w-full border-y-8 border-double border-stone-200 py-5 text-center font-extrabold text-4xl tracking widest'>OPINIÓN</div>

            <article className='flex flex-col gap-10'>
            <ColumnCTA image={dummy} section="Opinión" author="David Sánchez"
                title="What a wonderful news to be reading right????"
                content="This is such an interesThis is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, This is such an interesting news and you will love to read it. Give it a chance, come on"
               heightPassed={`100%`}
               widthPassed={`${100}%`}>
                </ColumnCTA>
            <ColumnCTA image={dummy} section="Opinión" author="David Sánchez"
                title="What a wonderful news to be reading right????"
                content="This is such an interesThis is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, This is such an interesting news and you will love to read it. Give it a chance, come on"
               heightPassed={`100%`}
               widthPassed={`${100}%`}>
                </ColumnCTA>
            <ColumnCTA image={dummy} section="Opinión" author="David Sánchez"
                title="What a wonderful news to be reading right????"
                content="This is such an interesThis is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, This is such an interesting news and you will love to read it. Give it a chance, come on"
               heightPassed={`100%`}
               widthPassed={`${100}%`}>
                </ColumnCTA>

                </article>

                <LittleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </LittleNews>
                <LittleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </LittleNews>
                <LittleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </LittleNews>
                <LittleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </LittleNews>
                <LittleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </LittleNews>

            <div className='w-full border-y-8 border-double border-stone-200 py-5 text-center font-extrabold text-4xl tracking widest my-10'>LO MÁS LEÍDO</div>
            <div className='w-1/2 m-auto border-b-8 border-double border-red-800 py-5 text-center font-extrabold text-4xl tracking widest'>1</div>
<MiddleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>
            <div className='w-1/2 m-auto border-b-8 border-double border-red-800 py-5 text-center font-extrabold text-4xl tracking widest'>2</div>
<MiddleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>
            <div className='w-1/2 m-auto border-b-8 border-double border-red-800 py-5 text-center font-extrabold text-4xl tracking widest'>3</div>
<MiddleNews title={dummyNews.general[0].title}
            author={dummyNews.general[0].author}
            image={dummy}
            height={'auto'}
            width={'100%'}>
            </MiddleNews>


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