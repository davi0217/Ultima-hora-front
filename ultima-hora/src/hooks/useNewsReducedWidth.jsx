import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export function useNewsReducedWidth(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const [news, setNews]=useState({
            "header":"",
            "cover":[],
            "firstMiddle":[],
            "body":[],
            "secondMiddle":[],
            "columns":[],
            "moreViewed":[]
    
        })

    const params=useParams() 

    
    
    useEffect(()=> {

        const newsDummy={
    "news_id": "0",
    "title": "Nueva noticia",
    "date": "2025-09-05T16:07:34.000Z",
    "subtitle": "¿A qué esperas para empezar a compartir tus noticias?",
    "caption": "Acompáñala de una imagen",
    "content": "Consequat tempor ipsum sed dolor ea veniam ut dolor consequat. Sed eiusmod ad tempor exercitation labore exercitation aliquip quis ut adipiscing minim laboris. Nisi lorem ex minim magna aliquip elit et adipiscing ex. Adipiscing ipsum nostrud ex lorem magna nostrud minim tempor ipsum quis adipiscing do ut. Incididunt magna ut sit consectetur do sed ut nostrud consequat labore adipiscing sit. Labore sit ex ullamco nisi sit aliqua.Adipiscing ipsum nisi ullamco nostrud et. Adipiscing minim dolore ex ad elit consectetur ea. Enim ea adipiscing ut aliquip aliqua consequat amet. Ut quis ad veniam ut nostrud dolore commodo ad consequat ut. Ullamco sed lorem lorem consectetur ullamco elit.",
    "image": "/static/imgs/dummy.jpg",
    "username": "xxxxx",
    "header": "XXXXXXXXXX",
    "header_id":0,
    "section": "XXXXXX",
    "tags": []
  }
        
        const section=params.section?params.section:false
        const header=params.header?params.header:false



        let urlToPass=`http://localhost:3000/news/search?${section?'section='+section:''}${section&&header?'&':''}${header?'header='+header:''}`
     
            
            async function fetchData(){await fetch(urlToPass).
            then(r=>{
              
                return r.json()
            }).then(r=>{
              
          
             let newCover=[]
            let counter=0
            let l=0
            
            while(newCover.length<1){
              
            if(!r[l]){
                     newCover.push(newsDummy)
                     continue
                }
                
                if( r[l]?.section!='Opinión'){
                newCover.push(r[l])
                l++
                counter++
            }else if(r[l]?.section=='Opinión'){
                l++
                counter++
            }

            }
          
            let newColumns=[]

            let z=0

             while(newColumns.length<=3){
       
            if(!r[z]){
                     newColumns.push(newsDummy)
                     continue
                }
                
                if( r[z]?.section=='Opinión'){
                newColumns.push(r[z])
                z++
               
            }else if(r[z]?.section!='Opinión'){
                z++
            }

            }

          
            let newFirstMiddle=[]
            let i=counter
            
            while(newFirstMiddle.length<3){
               
            if(!r[i]){
                     newFirstMiddle.push(newsDummy)
                     continue
                }
                
                if( r[i]?.section!='Opinión'){
                newFirstMiddle.push(r[i])
                i++
                counter++
            }else if(r[i]?.section=='Opinión'){
                i++
                counter++
            }

            }
           
           
            let newBody=[]

            let n=counter

            while(newBody.length<=5){
               
            if(!r[n]){
                     newBody.push(newsDummy)
                     continue
                }
                
                if( r[n]?.section!='Opinión'){
                newBody.push(r[n])
                n++
                counter++
            }else if(r[n]?.section=='Opinión'){
                n++
                counter++
            }

            }

            let newSecondMiddle=[]
            let x=counter
            
            while(newSecondMiddle.length<=3){
               
            if(!r[x]){
                     newSecondMiddle.push(newsDummy)
                     continue
                }
                
                if( r[x]?.section!='Opinión'){
                newSecondMiddle.push(r[x])
                x++
                counter++
            }else if(r[x]?.section=='Opinión'){
                x++
                counter++
            }

            }

          

            let headerToPass=header?header:'GAZETA'
    
            setNews({
                "header":headerToPass,
                "cover":newCover,
                "firstMiddle":newFirstMiddle,
                "body":newBody,
                "secondMiddle":newSecondMiddle,
                "columns":newColumns
            })
        
            
        })
    }

    fetchData()
    
            },[params])

             

return {news:news}


}