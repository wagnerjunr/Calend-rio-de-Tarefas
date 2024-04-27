import React from 'react'
import data from '../../Assets/data';
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './dailytask.css'

type boxDayProps = {
    taskName: "Hoje" | "Amanhã" | "Próximos dias";
}

const DailyTask = ({taskName}:boxDayProps) => {
    return (
        <div className='daily-container'>
            <h2 className= {taskName === "Hoje"? "box-day":"box-daily"}>{taskName}</h2>
            <div className='box-container'>
                {data.map((task: any) => {
                    return (
                        <>
                        <div key = {task.id} className='box-input'>
                            <section className='box-infos'>
                                <input type="checkbox" id={task.id} name="task" />
                                <label htmlFor={task.id}>{task.title}</label>
                            </section>
                            <section className='box-edit'>
                                <FaRegEdit/>
                                <IoMdClose />
                            </section>
                        </div>
                            <hr></hr>
                        </>
                    )
                })}
            </div>
        </div>

    )
}

export default DailyTask
