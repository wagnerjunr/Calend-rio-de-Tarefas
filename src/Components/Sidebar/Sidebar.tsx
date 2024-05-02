import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom' // Certifique-se de importar useLocation
import { BsListTask } from 'react-icons/bs'
import { IoCalendarClearOutline } from 'react-icons/io5'
import logo from './image/image.png'
import './sidebar.css'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState<string>('')
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo"></img>
        <h1>Tasker</h1>
      </div>
      <div className="sidebar-list">
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => setSidebar('task')}
        >
          <li
            className={isActive('/') ? 'task-list sidebar-show' : 'task-list'}
          >
            <BsListTask />
            Tarefas
          </li>
        </Link>
        <Link
          to="calendar"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => setSidebar('calendar')}
        >
          <li
            className={
              isActive('/calendar') ? 'task-list sidebar-show' : 'task-list'
            }
          >
            <IoCalendarClearOutline />
            Calendário
          </li>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
