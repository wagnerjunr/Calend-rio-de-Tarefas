import React from 'react'
import './navbar.css'
import { IoSearchSharp } from "react-icons/io5";
 import ModalComponent from '../Modal/Modal';



const Navbar = () => {
    return (
        <div className='nav-container'>
            <h1>Tarefas</h1>
            <div className='nav-task'>
                <IoSearchSharp style={{width:"30px"}}/>
                 <ModalComponent mode = {"newTask"}></ModalComponent>
            </div>
        </div>
    )
}

export default Navbar
