import {useState, useEffect, useContext} from  'react'
import { NewsContext } from '../App'
import {useLogin} from './useLogin.jsx'

export function useRequest(){

    const {useLogin}=useContext(NewsContext)
    const {registered, registeredInfo}=useLogin()

    const [requests, setRequests]=useState()
    const [pendingRequests, setPendingRequests]=useState()


    async function fetchRequests(){
        let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
       

        fetch(`http://localhost:3000/my-requests`,{
            method:'GET',
            headers:{
                Authorization: 'Bearer '+auth
            }
        }).then((r)=>{
            return r.json()
        }).then(
            (r)=>{
                
                setRequests(r)
            }
        )
    }

    async function fetchPendingRequests(){
        let auth=localStorage.getItem('token')?localStorage.getItem('token'):'';
        
        fetch(`http://localhost:3000/pending-requests`,{
            method:'GET',
            headers:{
                Authorization: 'Bearer '+auth
            }
        }).then((r)=>{
            console.log(r)
            return r.json()
        }).then(
            (r)=>{
                console.log(r)
                setPendingRequests(r)
            }
        )
    }

    useEffect(
        ()=>{

         if(registered){
                fetchRequests()
                fetchPendingRequests()
            }


        }
             ,[registered])


          
    return {requests:requests, fetchRequests:fetchRequests, pendingRequests:pendingRequests, fetchPendingRequests:fetchPendingRequests}

}