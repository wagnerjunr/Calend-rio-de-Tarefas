import React, { useState, useContext, useEffect } from "react";
import DatePickerComponent from "../DatePicker/DatePicker";
import { TaskContext } from "../../Context/TaskContext";
import taskProps from "../../Types/TaskSchema";

import { Button, FormControl, FormLabel, Select, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import './modal.css'

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
    id?: number;
    date?: string | null;
    open?:string;
}

const ModalComponent = ({ mode, id, date,open }: modeModalProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { startDate, endDate,
        taskDetails, setTaskDetails,
        updateTask,
        editTask,
        resetModal,
        isError, setIsError,
        setEditModal,
        setDate
    } = useContext(TaskContext)

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
    }, [startDate, endDate]);

    useEffect(()=>{
        if(open){
            onOpen();
        }
        if(date){
            resetModal();
        }
    },[date])


    const formatDate = (dateTime: Date | null) => {
        if (dateTime) {
            const date = dateTime.toISOString().replace(/T.*$/, '')
            const hours = String(dateTime.getHours()).padStart(2, '0');
            const minutes = String(dateTime.getMinutes()).padStart(2, '0');
            return `${date}T${hours}:${minutes}`;
        }
    };

    const editTaskHandler = () => {
        if (id) {
            editTask(id);
            onOpen();
        }
    };

    return (
        <div className="container-modal">
            {!open ? (
                mode === "newTask" ? (
                    <button className='nav-btn' onClick={() => { resetModal(); onOpen(); }}>
                        <FaPlus /> Adicionar Tarefa
                    </button>
                ) : (
                    <FaRegEdit size={20} className="btn-edit" onClick={editTaskHandler} />
                )
            ) : null}

            <Modal isOpen={isOpen} onClose={() => {
                onClose();
                setDate(null);
                setEditModal(false);
            }}>
                <ModalOverlay />
                <ModalContent>
                    {mode === "newTask" ? <ModalHeader>Nova Tarefa</ModalHeader> : <ModalHeader>Editar Tarefa</ModalHeader>}
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired isInvalid={isError}>
                            <FormLabel>Título</FormLabel>
                            <Input
                                value={taskDetails.title}
                                type='text'
                                name='title'
                                onChange={changerHandler}
                                placeholder='Título da Tarefa'
                                focusBorderColor='#9f7aea'
                            />
                            {isError ? (
                                <FormErrorMessage>Título Invalido</FormErrorMessage>
                            ) : (null)}

                        </FormControl>
                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Input
                                value={taskDetails.description}
                                type='text' name='description'
                                onChange={changerHandler}
                                placeholder='Descrição da Tarefa'
                                focusBorderColor='#9f7aea'
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Prioridade</FormLabel>
                            <Select name='priority' onChange={changerHandler} focusBorderColor='#9f7aea' >
                                <option value="Baixa" selected>Baixa</option>
                                <option value="Média">Média</option>
                                <option value="Alta">Alta</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired isInvalid={isError}>
                            <FormLabel>Data</FormLabel>
                            {date ? <DatePickerComponent date={date} /> : <DatePickerComponent />}
                            {isError ? (
                                <FormErrorMessage>Data Invalida</FormErrorMessage>
                            ) : (null)}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button style={{ backgroundColor: "#956fe8", color: "white" }} mr={3} onClick={() => {
                            if (!taskDetails.title) {
                                console.log("Titulo Invalido");
                                setIsError(true);
                                return;
                            }
                            if (startDate !== null && endDate !== null) {
                                if (startDate.getTime() > endDate.getTime()) {
                                    console.log("Horario invalido");
                                    return;
                                }
                            } else {
                                console.log("Data invalida");
                                return;
                            }
                            if (mode === "newTask") {
                                updateTask('/addtask');
                            } else if (id) {
                                updateTask(`/updatetask?id=${id}`);
                            }
                            onClose();
                            setDate(null);
                            setEditModal(false);
                        }}>
                            Salvar
                        </Button>
                        <Button style={{ backgroundColor: "#956fe8", color: "white" }} mr={3} onClick={() => { onClose(); setDate(null);setEditModal(false); }}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalComponent
