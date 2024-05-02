import React, { useContext, useState, useEffect } from 'react'
import './home.css'
import DailyTask from '../../Components/DailyTask/DailyTask'
import { TaskContext } from '../../Context/TaskContext'
import { isToday, isTomorrow, addDays } from 'date-fns'
import taskProps from '../../Types/TaskSchema'

const Home = () => {
  const { allTasks } = useContext(TaskContext)
  const isTodayDate = (date: any) => isToday(new Date(date))

  const isTomorrowDate = (date: any) => isTomorrow(new Date(date))

  const isFutureDate = (date: any) =>
    !isTodayDate(date) && !isTomorrowDate(date)

  const todayTasks = allTasks
    ? allTasks.filter((task) => isTodayDate(task.startDate))
    : []
  const tomorrowTasks = allTasks
    ? allTasks.filter((task) => isTomorrowDate(task.startDate))
    : []
  const futureTasks = allTasks
    ? allTasks.filter((task) => isFutureDate(task.startDate))
    : []

  return (
    <div className="home-layout">
      <DailyTask taskName={'Hoje'} tasks={todayTasks} />
      <DailyTask taskName={'Amanhã'} tasks={tomorrowTasks} />
      <DailyTask taskName={'Próximos dias'} tasks={futureTasks} />
    </div>
  )
}

export default Home
