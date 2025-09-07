import {useState, useEffect, useRef, useContext} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'


import {Navigator} from '../utils/Navigator.jsx'
import {Footer} from '../utils/Footer.jsx'
import dummy from "../assets/news_img/dummy.jpg"
import { NewsContext } from '../App.jsx'


export function User(){

    useEffect(()=>{

window.scrollTo(0,0)
  },[])

    const {useUser, useLogin, useRequest}=useContext(NewsContext)
    const {user,queryUsername, groupInfo, handleMemberVisibility, handleNewsVisibility, fetchMembers}=useUser()
   

    const {registeredInfo}=useLogin()
    const {requests, fetchRequests, pendingRequests, fetchPendingRequests}=useRequest()
   
    const navigate=useNavigate()
    const handleNavigation=function(route){
        navigate(route)
    }
    
    const [showRequests, setShowRequests]=useState(false)

    const toggleShowRequests=function(){
        setShowRequests(!showRequests)
    }


    const [searchValue, setSearchValue]=useState()
    const [groupsSearched, setGroupsSearched]=useState([])

    const updateInputValue=function(e){
        setSearchValue(e)
    }


  

    const updateGroupsSearched=function(word){

        fetch('http://localhost:3000/groups').then((r)=>{
            return r.json()}).then(
                
                (r)=>{
                    
                  
                    let newGroups=r.filter((r)=>{
                        return r.name.trim().replaceAll(' ', '').toLowerCase().startsWith(word.trim().replaceAll(' ','').toLowerCase())
                    }
                    )
                    
                    setGroupsSearched(newGroups)

            }
        )


    }


    return <>
    
    <Navigator></Navigator>

    <div className='w-full grid grid-cols-10  h-auto p-10 gap-10 relative '>

        <div className={`${queryUsername==registeredInfo?.username?'':'hidden'} col-span-1 flex items-center h-10 `}>
            <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className={`${queryUsername==registeredInfo?.username?'':'hidden'} col-span-8 col-start-2 mb-5 h-10 bg-red-200 flex items-center`}>
            <input onChange={(e)=>{
                updateInputValue(e.target.value)
                updateGroupsSearched(e.target.value)
            }} 
            className=' w-full h-full px-10 sm:text-sx text-md font-thin tracking-widest text-red-800 rounded-md border-red-900 border-2' type="text" placeholder="Únete a un grupo..." />
            </div>
            {groupsSearched?.length>0 && searchValue.trim()!='' && <div className='absolute z-20 top-20 pt-5 px-5  w-full flex flex-col  h-auto justify-start items-start'>

                {groupsSearched.map((g)=>{

                    return <div className='w-full h-auto p-5 bg-stone-100 px-10 flex flex-row gap-10  items-center justify-between '>
                            <h1 className='text-extrabold tracking-widest text-lg text-red-800'>{g.name}</h1>
                            <button onClick={()=>{
                                    if(!pendingRequests?.some((p)=>{return p.groupName==g.name})){
                                        let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';

                                        fetch('http://localhost:3000/make-request',{
                                            method:'POST',
                                            headers:{
                                        'Content-Type':'application/json; charset=utf-8',
                                        'Authorization': 'Bearer '+auth
                                              },
                                              body:JSON.stringify({
                                                    group:g.name,
                                                    text:' '
                                              })
                                        }).then((r)=>{return r.json()}).then((r)=>{
                                            fetchPendingRequests()
                                            return r
                                        }).catch((err)=>{console.log(err)})

                                    }

                            }} className={`${groupInfo.some((group)=>{return group.groupName==g.name})?'!hidden':''} ${pendingRequests?.some((p)=>{return p.groupName==g.name})?'bg-stone-500 text-stone-100 font-bold ':'bg-red-800 font-bold text-white'} font-[Saira] p-3 rounded-md cursor-pointer`} >{pendingRequests?.some((p)=>{return p.groupName==g.name})?'Pendiente':'Unirse'}</button>
                    </div>
                })}


                
                </div>}

       

        <div className={` col-span-8 col-start-2   md:col-span-6 md:col-start-3 lg:col-span-3 bg-stone-100 flex flex-col items-start justify-start p-3 ${showRequests?'':'max-h-150'}`}>
            <div className='w-15 h-15 rounded-full overflow-hidden'>
            <img className='  object-cover scale-x-200 scale-y-200  mb-6' src={`http://localhost:3000/${user?.image}`} alt="" />
            </div>
            <h1 className='font-extrabold tracking-widest w-full text-2xl'>{user?.username}</h1>
            <h1 className='font-bold w-full text-md border-b-2 pb-4 border-red-800'>{user?.city}, {user?.country}</h1>
            <h2 className='text-md pt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo eos labore autem quibusdam nostrum nisi aperiam et, recusandae sed fuga itaque voluptates cupiditate vero, ratione explicabo culpa eius blanditiis?
            Suscipit velit minus harum. Veniam porro facilis, numquam libero doloribus eligendi vitae sapiente qui. Nobis ex nisi, corrupti ipsam, rerum doloremque deserunt incidunt maxime quos modi molestias, quo sunt possimus?</h2>
            
            {requests?.length>0 && <div className='h-auto w-full'>

                <h3 onClick={()=>{
                    toggleShowRequests()
                }} className='text-red-800 cursor-pointer font-extrabold py-10 text-md tracking-widest h-10 px-3 text-right w-full'>PETICIONES</h3> 

                <div className={`${showRequests?'':'hidden'} h-auto p-1 flex flex-col gap-10 items-center justify-center`}>

                    {requests.map((r)=>{
                        return <div className='border-2 p-5 border-stone-400 flex flex-col justify-center items-center'>
                            <img className='w-10 h-10 rounded-full mb-5' src={`http://localhost:3000${r.image}`} alt="" />
                            <h1>{`${r.username} quiere unirse a ${r.groupName}:`}</h1>
                            <h2 className='italic w-full text-center mb-5'>{`${r.content}`}</h2>

                            <div className='w-full flex flex-row justify-center gap-5'>
                               <i
                               onClick={()=>{
                                let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';

                                fetch('http://localhost:3000/add-to-group',{
                                    method:'POST',
                                    headers:{
                                        'Content-Type':'application/json; charset=utf-8',
                                        'Authorization': 'Bearer '+auth
                                    },
                                    body:JSON.stringify({
                                        name:r.username,
                                        group:r.groupName
                                    })
                                }).then((r)=>{
                                    
                                    return r.json()
                                }).then((r)=>{return r}).catch((error)=>{
                                    console.log(error)
                                })

                                fetch('http://localhost:3000/request',{
                                    method:'DELETE',
                                    headers:{
                                        'Content-Type':'application/json; charset=utf-8',
                                        'Authorization': 'Bearer '+auth
                                    },
                                    body:JSON.stringify({
                                        id:r.id        
                                    })
                                }).then((r)=>{
                                    console.log(r)
                                    fetchRequests()
                                    fetchMembers()
                                    return r.json()
                                }).then((r)=>{return r}).catch((error)=>{
                                    console.log(error)
                                })



                               }}    class="fa-solid fa-check cursor-pointer rounded-md p-2 bg-green-500 text-red-900"></i>
                              
                               <i onClick={()=>{

                                 let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
                                fetch('http://localhost:3000/request',{
                                    method:'DELETE',
                                    headers:{
                                        'Content-Type':'application/json; charset=utf-8',
                                        'Authorization': 'Bearer '+auth
                                    },
                                    body:JSON.stringify({
                                        id:r.id        
                                    })
                                }).then((r)=>{
                                    console.log(r)
                                    fetchRequests()
                                    return r.json()
                                }).then((r)=>{return r}).catch((error)=>{
                                    console.log(error)
                                })
                               }} class="fa-solid fa-xmark cursor-pointer rounded-md p-2 bg-red-500 text-red-900"></i>
                            </div>
                            </div>
                       
                    })}

                </div>
                
                
                
                </div>}
        </div>

        
        <div className='col-span-10  lg:col-span-7 h-auto flex flex-col items-start justify-start gap-5'>
        <div className={`${queryUsername==registeredInfo?.username?'':'hidden'} w-full mb-5  h-auto flex flex-row items-center justify-center sm:justify-end gap-5 px-5`}>
            <button onClick={()=>{
                handleNavigation('/create-group')
            }} className='font-[Saira] text-white hover:text-stone-100 bg-red-400 hover:bg-red-800 transition-all duration-300 rounded-lg p-3 font-bold tracking-widest cursor-pointer'>Nuevo Grupo</button>
            <button onClick={()=>{
                handleNavigation('/create-header')
            }}  className='font-[Saira] text-white hover:text-stone-100 bg-red-400 hover:bg-red-800 transition-all duration-300 rounded-lg p-3 font-bold tracking-widest cursor-pointer'>Nueva Cabecera</button>
           
        </div>

            {groupInfo  && groupInfo.map((g)=>{
                    if(g.headerName==''){return}

                    return <div className='w-full h-auto flex bg-stone-100 pb-5 flex-col justify-start items-start '>
               <Link to={`/header/${g?.headerName}`}> <div className='w-full  border-b-2 border-red-800 h-30'>
                <h1 className='text-4xl font-[Monoton] p-4 tracking-widest'>{g?.headerName}</h1>
                </div></Link>
                <div className='w-full   h-auto'>
                <h2 className='text-sm md:text-lg  tracking-widest font-light   p-4'>Un diario del grupo <strong>{g?.groupName}</strong></h2>
                <h2 className='text-sm md:text-lg tracking-widest font-light   p-4'>{g.headerDescription}</h2>
                <div className='relative w-full p-4 '>
                    <p  onClick={()=>{
                        handleMemberVisibility(g.groupName)
                    }}  className='mb-5  tracking-widest cursor-pointer text-xs '>VER INTEGRANTES  <i className={`fa-solid ${g.showingMembers?'fa-caret-up':'fa-caret-down'}`}></i></p>
                    <ul className={`${g.showingMembers?'':'hidden'} text-red-800`}>
                        {g.members && g.members.map((m)=>{
                            return <li className='tracking-widest font-extrabold text-xs mb-2'>{m?.name?.toUpperCase()}</li>
                        })}                        
                    </ul>
                </div>
                <p onClick={()=>{
                    handleNewsVisibility(g.groupName)

                }} className={`${registeredInfo?.username==user?.username?'':'hidden'} mt-5 w-full cursor-pointer text-right font-extrabold text-md tracking-widest text-red-800 p-5`}>AÑADIR NOTICIA +</p>
                </div>

                <div className={`${g.showingNews?'h-200':'h-0 '}  w-full overflow-hidden transition-all duration-200 `}>
                    <div className='pt-20 px-5 flex flex-col justify-center gap-5 items-center'>

                        <h1 className='font-extrabold mb-7 w-full tracking-widest text-xl text-red-800'>Publica una nueva noticia</h1>

                        <form className='flex  flex-col w-full justify-center items-center' action='post'  onSubmit={(e)=>{
                            e.preventDefault()

                            console.log(g?.headerName,e.target.section.value,"./static/imgs/dummy.jpg",e.target.title.value,
                                    e.target.subtitle.value,
                                     e.target.content.value,
                                    e.target.caption.value)

                            let auth=`Bearer ${localStorage.getItem('token')?localStorage.getItem('token'):''}`
                            fetch('http://localhost:3000/publish-news',{
                                method:'POST',
                                headers:{
                                    'Content-Type':'application/json; charset=utf-8',
                                    Authorization:auth
                                },
                                body:JSON.stringify({
                                    header: g?.headerName,
                                    section: e.target.section.value,
                                    image: "./static/imgs/dummy.jpg",
                                    title: e.target.title.value,
                                    subtitle: e.target.subtitle.value,
                                    content: e.target.content.value,
                                    caption: e.target.caption.value
                                    }  
                                )       
                            }).then((r)=>{
                               
                                return   r.json()}).then((r)=>{console.log(r)})
                        }}>

                        <label className='w-full min-h-10  text-left text-lg text-stone-800' htmlFor="title">Titular</label>
                        <input className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' type="text" name="title" id="title" maxLength={100} minLength={10} />
                        <label className='w-full min-h-10 text-left text-lg text-stone-800' htmlFor="subtitle">Subtítulo</label>
                        <input className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' type="text" name="subtitle" id="subtitle" maxLength={200} minLength={50}/>
                        <label className='w-full min-h-10  text-left text-lg text-stone-800' htmlFor="caption">Caption</label>
                        <input className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' type="text" name="caption" id="caption" maxLength={80} minLength={0}/>
                        <label className='w-full min-h-10 text-left text-lg text-stone-800' htmlFor="content">Texto</label>
                        <textarea className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' name="content" id="content" maxLength={2500} minLength={500}/>
                        <select className='w-full min-h-10 mb-5 border-2 border-stone-500 rounded-md text-left text-lg text-stone-800' name="section" id="section">
                            <option value="Carrera" default>Carrera</option>
                            <option value="Amor">Amor</option>
                            <option value="Gente">Gente</option>
                            <option value="En pasado">En pasado</option>
                            <option value="Opinión">Opinión</option>
                        </select>

                        <input className='w-full mt-10 min-h-10 text-left text-lg text-stone-800' type="submit" />

                        </form>

                    </div>
                </div>

            </div>
            })}

            
           

        </div>
    </div>



    <Footer></Footer>
    
    
    
    
    
    
    </>
}
