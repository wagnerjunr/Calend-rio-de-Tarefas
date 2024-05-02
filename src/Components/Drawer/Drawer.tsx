import React, { useRef, useContext, useEffect } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
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

import Sidebar from '../Sidebar/Sidebar'

type openProps = {
  open:boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DrawerComponent({open,setOpen}:openProps) {

  useEffect(()=>{
    if(open){
      onOpen()
    }
  },[open])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <IoSearchSharp
        style={{ width: '30px', cursor: 'pointer' }}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={()=>{onClose();setOpen(!open)}}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{width:"250px"}}>
          <div className='sidebar-drawer'>
            <Sidebar></Sidebar>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent
