import React, { useRef,useContext } from 'react'
import { IoSearchSharp } from "react-icons/io5";

import { Button,Input} from '@chakra-ui/react';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'


function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement | null>(null); 
  
    return (
      <>
        <IoSearchSharp style={{width:"30px",cursor:"pointer"}} onClick={onOpen}/>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Busque uma tarefa</DrawerHeader>
            <DrawerBody>
              <Input placeholder='Digite o Título da tarefa' />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerComponent