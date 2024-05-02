import React,{useContext} from 'react'
import { TaskContext } from "../../Context/TaskContext";
import Alert from '../AlertDialog/Alert';
import './dailytask.css'
import ModalComponent from '../Modal/Modal';


type boxDayProps = {
    taskName: "Hoje" | "Amanhã" | "Próximos dias";
}

const DailyTask = ({taskName}:boxDayProps) => {
    const {allTasks} = useContext(TaskContext)
    
    return (
        <div className='daily-container'>
            <h2 className= {taskName === "Hoje"? "box-day":"box-daily"}>{taskName}</h2>
            <div className='box-container'>
                {allTasks.map((task) => {
                    return (
                        <div key = {task.id}>
                        <div  className='box-input'>
                            <section className='box-infos'>
                                <input type="checkbox" id={String(task.id)} name="task" />
                                <label htmlFor={String(task.id)}>{task.title}</label>
                            </section>
                            <section className='box-edit'>
                                <ModalComponent mode = {"editTask"} id={task.id}></ModalComponent>
                                <Alert id={task.id}></Alert>
                            </section>
                        </div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default DailyTask
