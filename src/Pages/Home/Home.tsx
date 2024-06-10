import React, { useContext, useState, useEffect } from 'react'
import './home.css'
import DailyTask from '../../Components/DailyTask/DailyTask'
import { TaskContext } from '../../Context/TaskContext'
import { isToday, isTomorrow, addDays, isPast } from 'date-fns' // Importe a função isPast
import taskProps from '../../Types/TaskSchema'

const Home = () => {
  const { allTasks } = useContext(TaskContext)
  const isTodayDate = (date: any) => isToday(new Date(date))

  const isTomorrowDate = (date: any) => isTomorrow(new Date(date))

  const isFutureDate = (date: any) =>
    !isTodayDate(date) && !isTomorrowDate(date)

  const isPastDate = (date: any) => isPast(new Date(date)) // Função para verificar se a data é passada

  const todayTasks = allTasks
    ? allTasks.filter((task) => isTodayDate(task.startDate) && !isPastDate(task.startDate)) // Filtrar apenas tarefas de hoje e que não sejam passadas
    : []
  const tomorrowTasks = allTasks
    ? allTasks.filter((task) => isTomorrowDate(task.startDate) && !isPastDate(task.startDate)) // Filtrar apenas tarefas de amanhã e que não sejam passadas
    : []
  const futureTasks = allTasks
    ? allTasks.filter((task) => isFutureDate(task.startDate) && !isPastDate(task.startDate)) // Filtrar apenas tarefas de próximos dias e que não sejam passadas
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
