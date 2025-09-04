import {useState, useEffect} from 'react'

export function useNewsFullWidth(){

    const [news, setNews]=useState({
            "cover":[],
            "middle":[],
            "body":[],
            "columns":[],
            "moreViewed":[]
    
        })
    
        useEffect(()=> {
    
            
            async function fetchData(){await fetch('http://localhost:3000/news/search?section=').
            then(r=>{
                return r.json()
            }).then(r=>{
                
                
            
            let newCover=[]
    
            for(let i=0; i<=r.length; i++){
                if(newCover.length>4){
                    break
                }

                if(r[i].section!='Opinión'){
                newCover.push(r[i])
                }else{
                continue
             }
            }

            let newColumns=[]
    
            for(let i=0; i<=r.length; i++){
                if(newColumns.length==5){
                    break
                }

                if(r[i]?.section=='Opinión'){
                newColumns.push(r[i])
                }else{
                continue
             }
            }
    
            let newMiddle=[]
    
            for(let i=5; i<=r.length; i++){
                if(newMiddle.length==3){
                    break
                }
                if(r[i]?.section!='Opinión'){
                newMiddle.push(r[i])
            }else{
                continue
            }
            }
    
            let newBody=[]
            for(let i=8; i<=r.length; i++){
                if(newBody.length==10 || !r[i]){
                    break
                }
                if(r[i]?.section!='Opinión'){
                    newBody.push(r[i])
                }else{
                    continue
                }
            }
    
            
            setNews({
                "cover":[...newCover, newColumns[0]],
                "middle":newMiddle,
                "body":newBody,
                "columns":newColumns.slice(1,newColumns.length)
            })
        
            
        })
    }

    fetchData()
    
            },[])

return {news:news}


}