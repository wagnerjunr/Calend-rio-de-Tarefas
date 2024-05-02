import React, { useContext, useState } from 'react'
import Fullcalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { DataContext } from '../../Context/DateContext'
import interactionPlugin, {
  Draggable,
  DropArg,
} from '@fullcalendar/interaction'
import brLocale from '@fullcalendar/core/locales/pt-br'
import { TaskContext } from '../../Context/TaskContext'

import './calendar.css'
import ModalComponent from '../../Components/Modal/Modal'

const Calendar = () => {
  const { dataTasks } = useContext(DataContext)
  const { date, setDate, editModal, setEditModal } = useContext(TaskContext)
  const [clickedId, setClickedId] = useState(null)

  const handleDateClick = (arg: any) => {
    setDate(arg.dateStr)
    console.log(arg.dateStr)
  }

  const handleEventClick = (e: any) => {
    const eventId = e.event.id
    setClickedId(eventId)
    setEditModal(true)
  }
  return (
    <div className="calendar-container">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        locale={brLocale}
        initialView={'dayGridMonth'}
        dateClick={handleDateClick}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        timeZone="GMT-3"
        events={dataTasks}
        eventClick={handleEventClick}
        nowIndicator={true}
        selectable={true}
        selectMirror={true}
        height="70vh"
      />
      {date && <ModalComponent mode={'newTask'} date={date} open={'open'} />}
      {editModal && (
        <ModalComponent
          mode={'editTask'}
          id={Number(clickedId)}
          open={'open'}
        />
      )}
    </div>
  )
}

export default Calendar
