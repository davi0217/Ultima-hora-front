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

    const [mostLiked, setMostLiked]=useState([])

    const params=useParams() 

    
    
    useEffect(()=> {

        const newsDummy={
    "news_id": "0",
    "title": "Empieza a escribir una nueva noticia",
    "date": "2025-09-05T16:07:34.000Z",
    "subtitle": "¿A qué esperas para empezar a compartir tus noticias?",
    "caption": "Acompáñala de una imagen",
    "content": "Consequat tempor ipsum sed dolor ea veniam ut dolor consequat. Sed eiusmod ad tempor exercitation labore exercitation aliquip quis ut adipiscing minim laboris. Nisi lorem ex minim magna aliquip elit et adipiscing ex. Adipiscing ipsum nostrud ex lorem magna nostrud minim tempor ipsum quis adipiscing do ut. Incididunt magna ut sit consectetur do sed ut nostrud consequat labore adipiscing sit. Labore sit ex ullamco nisi sit aliqua.Adipiscing ipsum nisi ullamco nostrud et. Adipiscing minim dolore ex ad elit consectetur ea. Enim ea adipiscing ut aliquip aliqua consequat amet. Ut quis ad veniam ut nostrud dolore commodo ad consequat ut. Ullamco sed lorem lorem consectetur ullamco elit.",
     "image": "static/imgs/dummy.jpg",
    "username": "xxxxx",
    "header": "XXXXXXXXXX",
    "header_id":0,
    "section": "XXXXXX",
    "tags": []
  }
        
        const section=params.section?params.section:false
        const header=params.header?params.header:false



        let urlToPass=`http://localhost:3000/news/search?${section?'section='+section:''}${section&&header?'&':''}${header?'header='+header:''}`
        let auth=`Bearer ${localStorage.getItem('token')?localStorage.getItem('token'):''}`
     
            
            async function fetchData(){await fetch(urlToPass,{
                method:'GET',
                headers:{
                    Authorization: auth
                }
            }).
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

            let allColumns=[]

            let w=0

            while(allColumns.length<15){
               
            if(!r[w]){
                     allColumns.push(newsDummy)
                     continue
                }
                
                if( r[w]?.section=='Opinión'){
                allColumns.push(r[w])
                w++
            }else if(r[w]?.section!='Opinión'){
                w++
            }

            }

            

          

            let headerToPass=header?header:'GAZETA'
    
            setNews({
                "header":headerToPass,
                "cover":newCover,
                "firstMiddle":newFirstMiddle,
                "body":newBody,
                "columns":newColumns,
                "allColumns":allColumns
            })
        console.log(allColumns)
            
        })
    }

    fetchData()
    
            },[params])

     useEffect(()=> {

        
        
        

        let urlToPass=`http://localhost:3000/news/most-liked`
     
            
            async function fetchMostLiked(){await fetch(urlToPass).
            then(r=>{
              
                return r.json()
            }).then(r=>{
              
           
             let newMostLiked=[]
            
            let l=0
            
            while(newMostLiked.length<4){
              
            if(!r[l]){
                    
                    break
                }
                
                if( r[l]?.section!='Opinión'){
                newMostLiked.push(r[l])
                l++
              
            }else if(r[l]?.section=='Opinión'){
                l++
            }

            }
 
            setMostLiked(newMostLiked)
        
            
        })
    }

    fetchMostLiked()
    
            },[params])

     console.log(news)        

return {news:news, mostLiked:mostLiked}


}