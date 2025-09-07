import {useState, useEffect} from 'react'


export function useLogin(){

    const [registered, setRegistered]=useState()
    const [registeredInfo, setRegisteredInfo]=useState()


    useEffect(

        ()=>{

            window.scrollTo(0,0)
            if(localStorage.getItem('token')){
                setRegistered(true)
            }else{
                setRegistered(false)
            }
           }, []
    )

    useEffect(()=>{


        let auth=`Bearer ${localStorage.getItem('token')?localStorage.getItem('token'):''}`
       

        async function fetchUserInfo(){

            fetch('http://localhost:3000/user',{
                method:'GET',
                headers:{
                    Authorization: auth
                }
            }).then(

                (r)=> {
                 
                    return r.json()}
            ).then((r)=>{
                
                setRegisteredInfo(r)
            }).catch((error)=>{
                localStorage.clear('token')
                setRegistered(false)
                console.log(`Failed to login, maybe not token is to be found: `+error.message)
            })
        }

        fetchUserInfo()
    },[registered]
    )

    const logOut=function(){
        localStorage.clear('token')
        setRegistered(false)
    }
   

   return {registered, logOut, registeredInfo}

}