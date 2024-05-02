import React from 'react'
import './navbar.css'
import { IoSearchSharp } from "react-icons/io5";
import ModalComponent from '../Modal/Modal';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchBar from '../SerachBar/SearchBar';



const Navbar = () => {
    return (
        <div className='nav-container'>
            <h1>Tarefas</h1>
            <div className='nav-task'>
                <SearchBar></SearchBar>
                <ModalComponent mode={"newTask"}></ModalComponent>
            </div>
        </div>
    )
}

export default Navbar
