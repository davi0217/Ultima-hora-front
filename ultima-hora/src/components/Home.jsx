import {useState, useEffect, useContext, useRef} from 'react'

import {Navigator} from '../utils/Navigator.jsx'
import {NewsFullWidth} from '../utils/NewsFullWidth.jsx'

export function Home(){

    return <main class='font-[Saira]'>
   
            <Navigator>

            </Navigator>
            <section className='p-10'>
            <NewsFullWidth>

            </NewsFullWidth>
            </section>
        
    </main>
}