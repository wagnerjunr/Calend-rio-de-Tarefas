import React, { useEffect, useState, useContext } from 'react'
import { TaskContext } from '../../Context/TaskContext';
import taskProps from '../../Types/TaskSchema';
import './searchresults.css'
import ModalComponent from '../Modal/Modal';

type valueSearchProps = {
    value: taskProps[];
}

export default function SearchResults({ value }: valueSearchProps) {

    return (
        <div className={value.length > 0 ? 'search-results' : undefined}>
            {value.map((task, index) => (
                <div key={index} className='search-task'>
                    <div className='search-task-container'>
                        <section className='search-infos'>
                            <p>Título: {task.title}</p>
                            <p>Data: {task.startDate ? task.startDate.toString() : null}</p>
                        </section>
                        <section className='search-edit'>
                            <ModalComponent mode={"editTask"} id={task.id}></ModalComponent>
                        </section>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}
