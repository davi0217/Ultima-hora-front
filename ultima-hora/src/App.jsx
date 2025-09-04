import { useState, useEffect, useContext, createContext} from 'react'
import {Link, BrowserRouter, Routes,Route, useParams, RouterProvider} from 'react-router-dom'

import './App.css'
import {Home} from './components/Home.jsx'
import {User} from './components/User.jsx'
import {Login} from './components/Login.jsx'
import {Register} from './components/Register.jsx'
import {useNewsFullWidth} from './hooks/useNewsFullWidth.jsx'
import {useLogin} from './hooks/useLogin.jsx'
import {useUser} from './hooks/useUser.jsx'

export const NewsContext=createContext()

function App() {

  
  return <NewsContext.Provider value={{useNewsFullWidth, useLogin, useUser}}>
  <BrowserRouter>



  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/user/:username' element={<User/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>

  </Routes>


  </BrowserRouter>

  </NewsContext.Provider> 

  




}

export default App
