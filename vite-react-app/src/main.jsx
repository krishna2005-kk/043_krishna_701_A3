import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from './App'
import ExampleList from './components/ExampleList'
import Conditional from './components/Conditional'
import Nested from './components/Nested'
import FormsExample from './components/FormsExample'
import Clock from './components/Clock'
import LiveValidation from './components/LiveValidation'
import DataFilter from './components/DataFilter'
import CrudFrontend from './components/CrudFrontend'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
