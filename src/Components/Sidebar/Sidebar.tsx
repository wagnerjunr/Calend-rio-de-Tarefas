import React, { useState } from 'react'
import { BsListTask } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from './image/image.png'

import './sidebar.css'
const Sidebar = () => {

    const [sidebar, setSidebar] = useState<boolean>(true)

    return (
        <div className='sidebar-container'>
            <div className='sidebar-logo'>
                <img src={logo}></img>
                <h1>Tasker</h1>
            </div>
            <div className='sidebar-list'>
                <Link to='/' style={{ textDecoration: "none", color: "white" }} onClick={() => setSidebar(!sidebar)}>
                    <li className={sidebar ? 'task-list sidebar-show' : 'task-list'}><BsListTask />Tarefas</li></Link>
                <Link to='calendar' style={{ textDecoration: "none", color: "white" }} onClick={() => setSidebar(!sidebar)}>
                    <li className={sidebar ? 'task-list' : 'task-list sidebar-show'}><IoCalendarClearOutline />Calendário</li></Link>
            </div>
        </div>
    )
}

export default Sidebar