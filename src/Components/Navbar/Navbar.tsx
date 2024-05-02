import React, { useState } from 'react'
import './navbar.css'
import DrawerComponent from '../Drawer/Drawer'
import ModalComponent from '../Modal/Modal'
import SearchBar from '../SerachBar/SearchBar'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="nav-container">
      <section className='nav-menu'>
      <button className="menu-drawer"onClick={()=>{setIsOpen(!isOpen)}}>
        <IoIosMenu size={30} />
      </button>
      {isOpen && <DrawerComponent open={isOpen} setOpen ={setIsOpen}/>}
      <h1>Tarefas</h1>
      </section>
      <div className="nav-task">
        <SearchBar></SearchBar>
        <ModalComponent mode={'newTask'}></ModalComponent>
      </div>
    </div>
  )
}

export default Navbar
