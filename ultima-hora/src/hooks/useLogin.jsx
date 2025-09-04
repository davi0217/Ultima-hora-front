import {useState, useEffect} from 'react'


export function useLogin(){

    const [registered, setRegistered]=useState()
    const [registeredInfo, setRegisteredInfo]=useState()


    useEffect(

        ()=>{

        
            console.log('at useLogin arrived '+registered)
            if(localStorage.getItem('token')){
                setRegistered(true)
            }else{
                setRegistered(false)
            }
           }, []
    )

    useEffect(()=>{

        console.log('actually my token is '+ localStorage.getItem('token'))

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
                console.log(r)
                setRegisteredInfo(r)
            }).catch((error)=>{
                console.log(error.message)
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