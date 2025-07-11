import React from 'react'

import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import Movies from '../components/Movies'
import Movie from '../components/Movie'

 function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>} ></Route>
        <Route path='/movie/:id' element={<Movie/>}></Route>
      </Routes>
    </div>
  )
}
export default Allroutes