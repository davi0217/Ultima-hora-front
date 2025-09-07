import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export function useUser(){

    const [user, setUser]=useState({})
    const [groups, setGroups]=useState([])
    const [groupInfo, setGroupInfo]=useState([])
    
    const params=useParams()
   const [queryUsername, setQueryUsername]=useState(params.username)

   useEffect(()=>{

    setQueryUsername(params.username)

   },[params])

   useEffect(()=>{

   },[groupInfo])

 
    console.log(groups)
    console.log(groupInfo)

    
        useEffect(()=> {
    
            
            async function fetchData(){await fetch(`http://localhost:3000/user/search?username=${queryUsername}`).
            then(r=>{
                return r.json()
            }).then(r=>{
                 
           setUser(r)
            
        })
    }

         let auth=`Bearer ${localStorage.getItem('token')?localStorage.getItem('token'):''}`

            async function fetchGroups(){await fetch(`http://localhost:3000/groups/search?username=${queryUsername}`,
                {
                    method:'GET',
                    headers:{
                        Authorization:auth
                    }
                }
            ).
            then(r=>{
                return r.json()
            }).then(r=>{ 
                
                setGroups(r) 
        })
    }


    fetchData()
    fetchGroups()
    
            },[queryUsername])


            async function fetchMembers(){
            
                let newGroups=[] 
                for(let g of groups){
            
                     let data=await fetch(`http://localhost:3000/usergroups/search?group=${g.groupName}`)
                     let res= await data.json()
                     let newGroup= {...g, members:res, showingMembers:false, showingNews:false}
                     newGroups.push(newGroup)
                     
                    }
                
                    setGroupInfo(newGroups)
            }

useEffect(()=>{


fetchMembers()

    },[groups])

    const handleMemberVisibility=function(groupName ){

        let newGroups=groupInfo.map((g)=>{
            if (g.groupName==groupName){
                return {...g, showingMembers:!g.showingMembers}
            }else{
                return g
            }
        })
        console.log(newGroups)

        setGroupInfo(newGroups)
    }
    const handleNewsVisibility=function(groupName ){

        let newGroups=groupInfo.map((g)=>{
            if (g.groupName==groupName){
                return {...g, showingNews:!g.showingNews}
            }else{
                return g
            }
        })
        console.log(newGroups)

        setGroupInfo(newGroups)
    }


return {user:user,queryUsername:queryUsername, groups:groups, groupInfo:groupInfo, handleMemberVisibility:handleMemberVisibility, handleNewsVisibility:handleNewsVisibility, fetchMembers:fetchMembers}


}