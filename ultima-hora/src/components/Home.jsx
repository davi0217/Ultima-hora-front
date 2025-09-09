import {useState, useEffect, useContext, useRef} from 'react'
import { useParams } from 'react-router-dom'

import {Navigator} from '../utils/Navigator.jsx'
import {Footer} from '../utils/Footer.jsx'
import {NewsFullWidth} from '../utils/NewsFullWidth.jsx'
import {NewsReducedWidth} from '../utils/NewsReducedWidth.jsx'

export function Home(){

    const params =useParams()

    useEffect(()=>{

window.scrollTo(0,0)
  },[params])

  

    return <main class='font-[Saira] '>
   
            <Navigator>

            </Navigator>
            <section className='w-full hidden lg:inline-block p-10 pt-60'>
            <NewsFullWidth>

            </NewsFullWidth>
            </section>
            <section className='w-full lg:hidden flex p-0 sm:p-10 pt-20'>
            <NewsReducedWidth>

            </NewsReducedWidth>
            </section>

            <Footer></Footer>
        
    </main>
}