import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import Archived from './pages/Archived'

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-note' element={<AddNote />} />
          <Route path='/archived' element={<Archived />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
