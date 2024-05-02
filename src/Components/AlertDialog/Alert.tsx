import React, { useRef,useContext } from 'react'
import { Button, useDisclosure } from '@chakra-ui/react';
import { IoMdClose } from "react-icons/io";
import { TaskContext } from "../../Context/TaskContext";



import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'

type idProps = {
    id:number;
}

 const Alert = ({id}:idProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement | null>(null); 
    const {deleteTask } = useContext(TaskContext)

    return (
        <>
          <IoMdClose size={20} className='btn-edit'onClick={onOpen}></IoMdClose>
          <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />
    
            <AlertDialogContent>
              <AlertDialogHeader>Descartar mudanças?</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Você tem certeza que deseja excluir essa tarefa?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Não
                </Button>
                <Button colorScheme='red' ml={3} onClick={()=>deleteTask(id)}>
                  Sim
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
}

export default Alert
