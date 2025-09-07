import { useState ,useEffect, useContext, use } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import { NewsContext } from "../App.jsx";

import {Navigator} from '../utils/Navigator.jsx'
import {Footer} from '../utils/Footer.jsx'

export function IndividualNews(){

    
    const {useIndividualNews, useLogin}=useContext(NewsContext)
    const {registeredInfo}=useLogin()
    
    const {newsInfo, likes, fetchLikes, fetchNewsInfo, comments, fetchComments}=useIndividualNews()
    const [letComment, setLetComment]=useState(false)
    
    const toggleLetComment=function(){
        setLetComment(!letComment)
    }

    useEffect(()=>{

window.scrollTo(0,0)
  },[])
 
  const navigation=useNavigate()

  const handleNavigation=function(route){
    navigation(route)
  }

    return <>
    <Navigator></Navigator>

    { newsInfo && <article className='w-full font-[Saira] grid gap-5 grid-cols-10 items-start justify-start  p-8 pt-15 bg-stone-100 h-auto'>

        

        <section className='  col-span-10 sm:col-span-7 flex flex-col items-start justify-start gap-8'>

            <h1 className=' font-extrabold text-2xl sm:text-4xl md:text-6xl break-auto hyphens-auto'>{newsInfo[0].title}</h1>
            <h2 className=' font-bold text-lg sm:text-2xl md:text-3xl text-stone-500 break-auto hyphens-auto'>{newsInfo[0].subtitle}</h2>
            <img className=' max-h-155 object-cover' src={`http://localhost:3000${newsInfo[0].image}`} alt="" />
            <span className='-mt-5 col-span-5 font-thin text-[10px] sm:text-md text-stone-600 '>{newsInfo[0].caption}</span>
        </section>
                <div className='hidden sticky top-0  col-span-3 col-start-8  h-150 bg-[url(./assets/logos/red-marble.jpg)] bg-stone-500 bg-blend-multiply bg-center bg-size-[1000px]  md:flex flex-col items-center justify-start gap-5 pt-5 '>
                    <p className='text-8xl font-[Monoton] text-red-700 sticky top-5 pb-20'>G</p>
                    <p className='text-xl font-[Monoton] text-stone-200 -mt-20'>A</p>
                    <p className='text-6xl font-[Monoton] text-red-700 sticky top-25'>Z</p>
                    <p className='text-xl font-[Monoton] text-stone-200'>E</p>
                    <p className='text-xl font-[Monoton] text-stone-200'>T</p>
                    <p className='text-xl font-[Monoton] text-stone-200'>A</p>
                    </div>

        <section className=' col-span-10 mt-5 sm:col-span-7 flex flex-col items-start justify-start gap-8'>
            {likes && <div className='flex gap-2 items-center'>

                <i onClick={()=>{
            if(likes.users.some((u)=>{return u.username==registeredInfo?.username})){

                let likeToPass=likes.users.filter((l)=>{
                    return l.username==registeredInfo?.username
                })
                let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
                    fetch('http://localhost:3000/like',{
                                    method:'DELETE',
                                    headers:{
                                        'Content-Type':'application/json; charset=utf-8',
                                        'Authorization':'Bearer '+auth
                                    },
                                    body:JSON.stringify({
                                        id:likeToPass[0]?.likeId
                                    })
                                }).then((r)=>{
                                    return r.json()
                                }).then((r)=>{
                                    console.log(r)
                                    fetchLikes()
                                    fetchNewsInfo()
                                   
                                }).catch((error)=>{
                                    handleNavigation('/login')
                                    console.log(error)
                                })
                                
            }else{
            let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
            fetch('http://localhost:3000/like-news',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                    'Authorization':'Bearer '+auth
                },
                body:JSON.stringify({
                    newsId:newsInfo[0].news_id
                })
            }).then((r)=>{
                if(r.status==404){
                handleNavigation('/login')
                }
                return r.json()
            }).then((r)=>{
                fetchLikes()
                fetchNewsInfo()
            }).catch((error)=>{
                console.log(error)
                
            })

                }}} className={`${likes?.users.some((u)=>{return u.username==registeredInfo?.username})?'text-red-800 text-2xl':'text-stone-500 opacity-80'} fa-solid fa-heart cursor-pointer  border-red-800 `}></i>
                <span>{likes?.likes_count}</span>

            </div>}

            <div className='flex gap-2 items-center'>
          <Link to={`/user/${newsInfo[0].username}`}>  <p className=' font-bold text-md sm:text-xl md:text-break-auto hyphens-auto'>{newsInfo[0].username}</p></Link> <Link to={`/header/${newsInfo[0].header}`}> <p>{`   |  ${newsInfo[0].header}`}</p></Link>
            </div>
            <span className=' font-thin -mt-8 text-xs sm:text-sm md:text-break-auto hyphens-auto'>{newsInfo[0].date.slice(0,10)}</span>
            <h2 className=' font-normal text-sm sm:text-md md:text-lg text-black break-auto hyphens-auto'>{newsInfo[0].content+' Hace un siglo, la radio irrumpió en los hogares con una fuerza imparable. La primera transmisión masiva fue un parteaguas que cambió la manera en la que el mundo se comunicaba, creando un nuevo tejido social alrededor de las ondas sonoras.Hace un siglo, la radio irrumpió en los hogares con una fuerza imparable. La primera transmisión masiva fue un parteaguas que cambió la manera en la que el mundo se comunicaba, creando un nuevo tejido social alrededor de las ondas sonoras.'} </h2>
        </section>

        


    </article>}

    {comments && <article className=' mt-10 pt-5 px-5 pb-15 grid grid-cols-10  bg-red-100'>

        <h3 className='text-red-800 col-span-10 pb-10 font-bold text-xl sm:text-3xl tracking-widest'> {`Comentarios  [ ${comments.comments_count} ]`}</h3>
        <h4 className={` ${registeredInfo?.username?'':'hidden'} text-red-800 col-span-10 pb-10 font-thin text-md sm:text-xl tracking-widest`}> Deja tu comentario <i onClick={()=>{
            toggleLetComment()
        }} className={`fa-solid ${letComment?'fa-caret-up':'fa-caret-down'} cursor-pointer`}></i></h4>

        <form className={`${letComment?'':'-mb-20'} h-auto transition-all duration-500 col-span-10 pr-10 flex justify-end flex-col items-end`}
             onSubmit={(e)=>{
                e.preventDefault()
                let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
            fetch('http://localhost:3000/leave-comment',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                    'Authorization':'Bearer '+auth
                },
                body:JSON.stringify({
                    newsId:newsInfo[0].news_id,
                    comment:e.target.comment.value
                })
            }).then((r)=>{
                return r.json()
            }).then((r)=>{
                fetchComments()
                fetchNewsInfo()
                toggleLetComment()
                e.target.comment.value=''
            }).catch((error)=>{
                console.log(error)
            })
            }}>
            <textarea className={`${letComment?'h-60 md:h-50 opacity-100':'h-0 opacity-0 overflow-hidden'} w-full mb-5 rounded-xl transition-all duration-500 text-md lg:text-lg p-5 bg-stone-100 text-red-300`} maxLength={500} name="comment" id="comment"></textarea>
            <input type='submit' className={`${letComment?'h-10 md:h-15 opacity-100 cursor-pointer':'h-0 opacity-0 overflow-hidden'} font-[Saira] w-1/3 sm:w-1/6 my-5 rounded-3xl transition-all duration-900 text-md lg:text-lg  bg-red-800 text-white`} value='Enviar' ></input>
        
        </form>

        {comments.users?.length>0 && comments.users.map((c)=>{
                return <div className='col-span-9 lg:col-span-8 mb-5  bg-red-800 rounded-xl flex flex-col items-start justify-start'>
                    <div className=' w-full p-3 px-5 rounded-t-xl flex items-center gap-10 bg-stone-100 border-b-4 border-red-900'>
                        <img className='w-11 h-11   sm:w-16 sm:h-16 rounded-full' src={`http://localhost:3000${c.image}`} alt="" /> <span className='font-extrabold text-md sm:text-xl col-span-3'>{c.username}</span>
                    </div>
                        
                    {c.comments.map((comment)=>{
                      

                        return <>
                        <div className='w-full p-3 px-5 flex items-center gap-10 text-white'><span><i class="fa-regular fa-newspaper text-white"></i></span>{comment.content}</div>
                        <div className='w-full flex justify-end p-2'>
                            <p onClick={()=>{

                    let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
                    fetch('http://localhost:3000/comment',{
                                    method:'DELETE',
                                    headers:{
                                        'Content-Type':'application/json; charset=utf-8',
                                        'Authorization':'Bearer '+auth
                                    },
                                    body:JSON.stringify({
                                        id:comment.id
                                    })
                                }).then((r)=>{
                                    console.log(r)
                                    return r.json()
                                }).then((r)=>{
                                    fetchComments()
                                    fetchNewsInfo()
                                    console.log(r)
                                }).catch((error)=>{
                                    console.log(error)
                                })
                                }}

                             className={`${c.username==registeredInfo?.username?'':'hidden'} bg-stone-200 p-2 hover:bg-white hover:outline-2 transition-all duration-100 hover:outline-red-500 hover:text-red-500 text-center w-25 rounded-xl text-md font-extrabold tracking-widest cursor-pointer`}>Eliminar</p>
                        </div>
                        </>
                    })}


                </div>

        })}

        
        
        </article>}

    <Footer></Footer>


    </>
}