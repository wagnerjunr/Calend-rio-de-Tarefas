import React from 'react'
import './home.css'
import DailyTask from '../../Components/DailyTask/DailyTask'

 const Home = () => {
  return (
    <div className='home-layout'>
        <DailyTask taskName = {"Hoje"}></DailyTask>
        <DailyTask taskName = {"Amanhã"}></DailyTask>
        <DailyTask taskName = {"Próximos dias"}></DailyTask>
    </div>
  )
}

export default Home
