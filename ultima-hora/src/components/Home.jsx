import {useState, useEffect, useContext, useRef} from 'react'

import {Navigator} from '../utils/Navigator.jsx'
import {Footer} from '../utils/Footer.jsx'
import {NewsFullWidth} from '../utils/NewsFullWidth.jsx'
import {NewsReducedWidth} from '../utils/NewsReducedWidth.jsx'

export function Home(){

  

    return <main class='font-[Saira]'>
   
            <Navigator>

            </Navigator>
            <section className=' hidden lg:inline-block p-10'>
            <NewsFullWidth>

            </NewsFullWidth>
            </section>
            <section className=' lg:hidden flex p-10'>
            <NewsReducedWidth>

            </NewsReducedWidth>
            </section>

            <Footer></Footer>
        
    </main>
}