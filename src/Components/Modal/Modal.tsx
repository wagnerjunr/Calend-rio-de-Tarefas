import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import DatePickerComponent from "../DatePicker/DatePicker";
import taskProps from "../../Types/TaskSchema";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'


const ModalComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [taskDetails,setTaskDetails] = useState<Omit <taskProps,'id'>>({
        title:"",
        description:"",
        priority:"Baixa",
        startDate:null,
        endDate:null,
    })
    
    const changerHandler = (e:any) =>{
        setTaskDetails({...taskDetails,[e.target.name]:e.target.value})
      }

    const addTask = () =>{
        console.log(taskDetails);
        onClose();
    }

    return (
        <div>
            <button className='nav-btn' onClick={onOpen}><FaPlus />Adicionar Tarefa</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Nova Tarefa</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Título</FormLabel>
                            <Input type='text' name='title' onChange={changerHandler} placeholder='Título da Tarefa'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Input type='text' name='description'onChange={changerHandler} placeholder='Descrição da Tarefa'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Prioridade</FormLabel>
                            <Select name = 'priority' onChange={changerHandler}>
                                <option selected>Baixa</option>
                                <option>Média</option>
                                <option>Alta</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Data</FormLabel>
                            <DatePickerComponent></DatePickerComponent>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={addTask} >
                            Adicionar
                        </Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalComponent
