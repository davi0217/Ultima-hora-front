import {useState, useEffect, useRef} from 'react'

export function Cover({title, subtitle, caption, author, image, height, width}){

  console.log(title)


    return <article style={{width:width, height:height}} className=' h-auto py-5 ' >

        <img className='w-300 h-auto max-h-110 object-cover mb-1' src={image} alt="" />
        <p className='w-full text-right text-xs text-stone-500 font-thin mb-5'>{caption}</p>
        <h5 className='mb-4'>{author}</h5>
        <h1 className='text-xl md:text-4xl font-extrabold mb-4 '><span><i class="fa-regular fa-newspaper text-red-800"></i></span>&emsp;{title}</h1>
        <h1 className='text-md '>{subtitle}{subtitle}</h1>


    </article>


}