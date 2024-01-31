import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from "../pages/Home";
import MusicPlayer from "../pages/MusicPLayer"
function AllRoutes() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}
    />
    <Route path="/music" element={<MusicPlayer></MusicPlayer>}
    />
  </Routes>
  </BrowserRouter>
  )
}

export default AllRoutes
