import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import './app.css'
import { DataContextProvider } from './Context/DateContext'

function App() {
  return (
    <div className="container-app">
      <section className='container-sidebar'>
      <Sidebar />
      </section>
      <div className="layout-app">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default App
