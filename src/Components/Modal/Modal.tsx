import React, { useState, useContext, useEffect } from "react";
import DatePickerComponent from "../DatePicker/DatePicker";
import { TaskContext } from "../../Context/TaskContext";
import taskProps from "../../Types/TaskSchema";

import { Button, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

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

type modeModalProps = {
    mode: string;
    task?: taskProps;
}

const ModalComponent = ({ mode, task }: modeModalProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { startDate, endDate, taskDetails, setTaskDetails, updateTask, editTask, resetModal } = useContext(TaskContext)

    const changerHandler = (e: any) => {
        setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (startDate !== taskDetails.startDate) {
            const startDateFormat = formatDate(startDate);
            setTaskDetails({ ...taskDetails, startDate: startDateFormat });
        }
        if (endDate !== taskDetails.endDate) {
            const endDateFormat = formatDate(endDate);
            setTaskDetails({ ...taskDetails, endDate: endDateFormat });
        }
    }, [startDate, endDate])

    const formatDate = (dateTime: Date | null) => {
        if (dateTime) {
            const date = dateTime.toISOString().replace(/T.*$/, '')
            const hours = String(dateTime.getHours()).padStart(2, '0');
            const minutes = String(dateTime.getMinutes()).padStart(2, '0');
            return `${date}T${hours}:${minutes}`;
        }
    };

    const editTaskHandler = () => {
        if (task) {
            editTask(task.id);
            onOpen();
        }
    };

    return (
        <div>
            {mode === "newTask" ? <button className='nav-btn' onClick={() => { resetModal(); onOpen(); }}>
                <FaPlus />Adicionar Tarefa
            </button> : <FaRegEdit onClick={editTaskHandler} />}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {mode === "newTask" ? <ModalHeader>Nova Tarefa</ModalHeader> : <ModalHeader>Editar Tarefa</ModalHeader>}
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Título</FormLabel>
                            <Input value={taskDetails.title} type='text' name='title' onChange={changerHandler} placeholder='Título da Tarefa'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Input value={taskDetails.description} type='text' name='description' onChange={changerHandler} placeholder='Descrição da Tarefa'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Prioridade</FormLabel>
                            <Select name='priority' onChange={changerHandler}>
                                <option value="Baixa" selected>Baixa</option>
                                <option value="Média">Média</option>
                                <option value="Alta">Alta</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Data</FormLabel>
                            <DatePickerComponent></DatePickerComponent>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            if (mode === "newTask") {
                                updateTask('/addtask');
                            } else if (task) {
                                updateTask(`/updatetask?id=${task.id}`);
                            }
                            onClose();
                        }}>
                            Salvar
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
