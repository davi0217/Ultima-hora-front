import { useState , useEffect} from "react";
import { NewsContext } from "../App.jsx";
import { useParams } from "react-router-dom";


export function useIndividualNews(){

const [newsInfo, setNewsInfo]=useState()
const [likes, setLikes]=useState()
const [comments, setComments]=useState()
const params=useParams()



async function fetchNewsInfo(){
    let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';

    await fetch(`http://localhost:3000/news/search?id=${params.id}`,{
        method:'GET',
        headers:{
            Authorization:'Bearer '+auth
        }
    }
    ).then((r)=>{
        return r.json()
    }).then((r)=>{
        setNewsInfo(r)
        return r
    }).catch((error)=>{
        console.log(error)
    })
}

async function fetchLikes(){
    let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
    
    await fetch(`http://localhost:3000/likes/search?id=${params.id}`,{
        method:'GET',
        headers:{
            Authorization:'Bearer '+auth
        }
    }
).then((r)=>{
    return r.json()
}).then((r)=>{
    setLikes(r)
    return r
}).catch((error)=>{
    console.log(error)
})
}

async function fetchComments(){
    let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
    
    await fetch(`http://localhost:3000/comments/search?id=${params.id}`,{
        method:'GET',
        headers:{
            Authorization:'Bearer '+auth
        }
    }
).then((r)=>{
    return r.json()
}).then((r)=>{
    setComments(r)
    return r
}).catch((error)=>{
    console.log(error)
})
}

useEffect(()=>{

    fetchNewsInfo()
    

},[params, likes])

useEffect(()=>{
    fetchLikes()
},[params])

useEffect(()=>{
    fetchComments()
},[params])


return {newsInfo:newsInfo, likes:likes, fetchLikes:fetchLikes,comments:comments, fetchComments:fetchComments, fetchNewsInfo:fetchNewsInfo}


}