import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import LandingPage from './layouts/LandingPage'
import Login from './layouts/Login'
import Dashboard from './layouts/Dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />} exact />
    <Route path='/login' element={<Login />} exact />
    <Route path='/dashboard' element={<Dashboard />} exact />
    </Routes>
    </BrowserRouter>
  )
}

export default App
