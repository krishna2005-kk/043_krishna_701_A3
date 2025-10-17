import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Leave from './pages/Leave'

function App(){
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <div style={{padding:20,fontFamily:'Arial'}}>
        <h2>Employee Site (React Frontend)</h2>
        <nav style={{marginBottom:10}}>
          <Link to="/" className="me-2">Home</Link>
          {token ? <><Link to='/profile' className="me-2">Profile</Link><Link to='/leave' className="me-2">Leave</Link><a href="#" onClick={()=>{localStorage.removeItem('token'); window.location.href='/'}}>Logout</a></> : <Link to='/login'>Login</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome. Use login to see profile and leave application.</div>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={token ? <Profile/> : <Navigate to="/login" />} />
          <Route path="/leave" element={token ? <Leave/> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
