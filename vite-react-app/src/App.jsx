import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ExampleList from './components/ExampleList'
import Conditional from './components/Conditional'
import Nested from './components/Nested'
import FormsExample from './components/FormsExample'
import Clock from './components/Clock'
import LiveValidation from './components/LiveValidation'
import DataFilter from './components/DataFilter'
import CrudFrontend from './components/CrudFrontend'

export default function App(){
  return (
    <div className="container p-4">
      <h1 className="mb-4">Vite React App - Practical Assignments</h1>
      <nav className="mb-4">
        <Link className="me-3" to="/">List</Link>
        <Link className="me-3" to="/conditional">Conditional</Link>
        <Link className="me-3" to="/nested">Nested</Link>
        <Link className="me-3" to="/forms">Forms</Link>
        <Link className="me-3" to="/clock">Digital Clock</Link>
        <Link className="me-3" to="/validation">Live Validation</Link>
        <Link className="me-3" to="/filter">Live Filter</Link>
        <Link className="me-3" to="/crud">CRUD Frontend</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ExampleList />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/nested" element={<Nested />} />
        <Route path="/forms" element={<FormsExample />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/validation" element={<LiveValidation />} />
        <Route path="/filter" element={<DataFilter />} />
        <Route path="/crud" element={<CrudFrontend />} />
      </Routes>
    </div>
  )
}
