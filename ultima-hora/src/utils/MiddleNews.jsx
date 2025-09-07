import {useState, useEffect, useRef} from 'react'

export function MiddleNews({title, author, image, height, width}){


    return <article style={{width:width, height:height}} className=' h-auto  py-5 border-t-4 border-t-red-800  grid grid-cols-4 gap-5'>

        <div className='col-span-2 md:col-span-3  flex items-center flex-wrap'>

            <h4 className='text-[10px] w-full font-extrabold tracking-widest mb-5'>{author?.toUpperCase()}</h4>
            <h1 className='text-sm md:text-2xl w-full font-extrabold'><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{title}</h1>
        </div>
        <img className=' col-span-2 md:col-span-1 h-full object-cover' src={image} alt="" />


    </article>


}