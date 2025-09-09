import {useState, useEffect, useRef} from 'react'

export function MiddleNews({title, author, image, height, width}){


    return <article style={{width:width, height:height}} className=' h-auto  py-5 border-t-4 border-t-red-800  grid grid-cols-5 gap-2 '>

        <div className='col-span-3 md:col-span-3 gap-2  flex items-start flex-wrap'>

            <h1 className='text-sm md:text-2xl w-full font-extrabold'><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{title}</h1>
            <h4 className='text-[10px] w-full font-extrabold tracking-widest mb-5'>{author?.toUpperCase()}</h4>
        </div>
        <div className='col-span-2 md:col-span-2 bg-red-500'>
        <img className='w-full  h-full object-cover' src={image} alt="" />
</div>

    </article>


}