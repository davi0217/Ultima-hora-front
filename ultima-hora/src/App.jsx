import { useState, useEffect, useContext, createContext} from 'react'
import {Link, BrowserRouter, Routes,Route, useParams, RouterProvider} from 'react-router-dom'

import './App.css'
import {Home} from './components/Home.jsx'
import {IndividualNews} from './components/IndividualNews.jsx'
import {User} from './components/User.jsx'
import {Login} from './components/Login.jsx'
import {Register} from './components/Register.jsx'
import {CreateGroup} from './components/CreateGroup.jsx'
import {CreateHeader} from './components/CreateHeader.jsx'
import {useNewsFullWidth} from './hooks/useNewsFullWidth.jsx'
import {useNewsReducedWidth} from './hooks/useNewsReducedWidth.jsx'
import {useLogin} from './hooks/useLogin.jsx'
import {useUser} from './hooks/useUser.jsx'
import {useRequest} from './hooks/useRequest.jsx'
import {useIndividualNews} from './hooks/useIndividualNews.jsx'

export const NewsContext=createContext()

function App() {

  
  return <NewsContext.Provider
  value={{useNewsFullWidth, 
  useNewsReducedWidth, 
  useLogin, 
  useUser, 
  useRequest, 
  useIndividualNews}}>
  <BrowserRouter>



  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/news/:id' element={<IndividualNews/>}></Route>
    <Route path='/news/:header/:id' element={<IndividualNews/>}></Route>
    <Route path='/section/:section' element={<Home/>}></Route>
    <Route path='/header/:header' element={<Home/>}></Route>
    <Route path='/section/:section/header/:header' element={<Home/>}></Route>
    <Route path='/user/:username' element={<User/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/create-group' element={<CreateGroup/>}></Route>
    <Route path='/create-header' element={<CreateHeader/>}></Route>

  </Routes>


  </BrowserRouter>

  </NewsContext.Provider> 

  




}

export default App
