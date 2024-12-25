import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProjects from './Pages/AddProjects'
import { ToastContainer, toast } from 'react-toastify';
import Addexp from './Pages/Addexp';

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addprojects' element={<AddProjects/>}/>
          <Route path='/addExp' element={<Addexp/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App