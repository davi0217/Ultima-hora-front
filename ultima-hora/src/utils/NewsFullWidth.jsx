import {useState, useEffect, useRef} from 'react'

import dummy from "../assets/news_img/dummy.jpg"

export function NewsFullWidth(){

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
        
        
        return <article className='bg-stone-100 h-200 p-5 grid grid-cols-9 gap-3 w-full overflow-hidden '>

            <div className='col-span-4 p-1  w-full flex flex-wrap gap-1'>

                <div className='h-7/10 w-full  overflow-hidden'>

                <h1 className='h-auto w-full  text-4xl font-extrabold mb-5  tracking-wide'> <span><i class="fa-regular fa-newspaper text-red-800"></i></span>  Such wonderful news to be reading at this time...</h1>
                <img className='w-400 h-70 object-cover mb-5' src={dummy} alt="" />
                <h2 className='h-auto w-full  font-normal text-sm  '>This is such an interes"This is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, "This is such an interesting news and you will love to read it. Give it a chance, come on, </h2>
                
                
                </div>
                <div className='h-3/10 w-full  grid grid-cols-2 gap-5 '>

                <div className='col-span-1 h-full  overflow-hidden'>
                                    <h2 className=' w-full text-stone-700  font-bold text-sm  '> <span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;This is such an interes"This is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, "This is such an interesting news and you will love to read it. Give it a chance, come on, </h2>

                </div>
                <div className='col-span-1 h-full  overflow-hidden'>
                                    <h2 className=' w-full text-stone-700  font-bold text-sm  '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;This is such an interes"This is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, "This is such an interesting news and you will love to read it. Give it a chance, come on, </h2>

                </div>
                

                </div>


            </div>
            <div className='col-span-2  flex flex-wrap divide-y-2 divide-stone-400'>
                    <div className='h-1/2 w-full p-2  py-4  overflow-hidden'>

                    <img className='object-cover h-1/3 w-300 mb-5' src={dummy} alt="" />
                    <h1 className='font-extrabold text-2xl tracking-wide '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;What a wonderful news to be reading right???</h1>
                    </div>

                    <div className='h-1/2 w-full p-2 py-4  overflow-hidden'>

                    <img className='object-cover h-1/3 w-300 mb-5' src={dummy} alt="" />
                    <h1 className='font-extrabold text-2xl tracking-wide '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;What a wonderful news to be reading right???</h1>
                    </div>

            </div>
            <div className='col-span-3 flex flex-wrap '>

                <div className='h-5/7 relative  bg-stone-100 border-2 border-stone-400 '>

                <img className='h-1/3  w-300 object-cover' src={dummy} alt="" />
                <div className='absolute  bottom-0 h-3/4 w-full flex justify-center'>
                <div className='bg-stone-100 overflow-hidden px-2 w-4/5 h-full text-center py-2'>
                <h1 className='font-extrabold text-lg tracking-widest'>OPINIÓN</h1>
                <h2 className='font-bold text-sm tracking-widest'>David Sánchez</h2>
                <h3 className='font-extrabold text-xl  pt-5 mb-5'>What a wonderful news to be reading right???</h3>
                <h4 className=' w-full text-stone-700  font-normal text-sm  '>This is such an interes"This is such an interesting news and you will love to read it. ove to read it. Give it a chance, come onchance, come onting news and you will love to read it. Give it a chance, come on, "This is such an interesting news and you will love to read it. Give it a chance, come on, </h4>

                



                </div>
                
                </div>
                </div>

            </div>


        
        
        </article>

}