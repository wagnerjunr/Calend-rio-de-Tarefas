import React, { useContext, useState } from 'react'
import { TaskContext } from "../../Context/TaskContext";
import Alert from '../AlertDialog/Alert';
import ModalComponent from '../Modal/Modal';
import AccordionComponent from '../Accordion/Accordion';
import { IoIosArrowDown } from "react-icons/io";
import './dailytask.css'


type boxDayProps = {
    taskName: "Hoje" | "Amanhã" | "Próximos dias";
}

const DailyTask = ({ taskName }: boxDayProps) => {
    const { allTasks } = useContext(TaskContext);
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const [checkBoxStates, setCheckBoxStates] = useState<{ [key: number]: boolean }>({});

    const handleChange = (taskId: number) => {
        setSelectedTaskId(taskId === selectedTaskId ? null : taskId);
    };

    const handleCheckboxChange = (taskId: number) => {
        setCheckBoxStates(prevState => ({
            ...prevState,
            [taskId]: !prevState[taskId]
        }));
    };

    return (
        <div className='daily-container'>
            <h2 className={taskName === "Hoje" ? "box-day" : "box-daily"}>{taskName}</h2>
            <div className='box-container'>
                {allTasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <div className='box-input'>
                                <section className={task.priority === "Baixa" ? 'box-infos low-priority' :
                                        task.priority === "Média" ? 'box-infos medium-priority' :
                                        task.priority === "Alta" ? 'box-infos high-priority' : ''
                                }>
                                    <input
                                        type="checkbox"
                                        id={String(task.id)}
                                        name="task"
                                        checked={checkBoxStates[task.id] || false}
                                        onChange={() => handleCheckboxChange(task.id)}
                                    />
                                    <label className={checkBoxStates[task.id] ? "completed-task" : ""} htmlFor={String(task.id)}>{task.title}</label>
                                </section>
                                <section className='box-edit'>
                                    <button onClick={() => handleChange(task.id)}>
                                        <IoIosArrowDown />
                                    </button>
                                    <ModalComponent mode={"editTask"} id={task.id}></ModalComponent>
                                    <Alert id={task.id}></Alert>
                                </section>
                            </div>
                            {selectedTaskId === task.id ? <AccordionComponent task={task} /> : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyTask;