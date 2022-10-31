import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Help from '../Help/Help'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Notfound from '../Notfound/Notfound'
import Practice from '../Practice/Practice'
import Rank from '../Rank/Rank'
import Study from '../Study/Study'

export default function App() { 

  return (
  <>
  <Navbar/>
  <div className="container d-flex align-items-center vh-100">
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='home' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='study' element={<Study/>}></Route>
    <Route path='help' element={<Help/>}></Route>
    <Route path='words' element={<Practice/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>
    <Route path='rank' element={<Rank/>}></Route>
  </Routes>
  </div>
  </>
  )
}
