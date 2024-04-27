import React from 'react'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import brLocale from '@fullcalendar/core/locales/pt-br';

import './calendar.css'

const Calendar = () => {

    const handleDateClick = (arg: any) => {
        alert(arg.dateStr)
    }
    return (
        <div className='calendar-container'>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                locale={brLocale}
                initialView={"dayGridMonth"}
                dateClick={handleDateClick}
                
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                timeZone='GMT-3'
                events={[
                    {title: 'Tarefa 1',start: '2024-04-27T12:30',end:''},
                    { title: 'event 2', date: '2024-04-25' }
                ]}
                nowIndicator={true}
                editable={true}
                droppable={true}
                selectable={true}
                selectMirror={true}
                height="70vh"

            /></div>
    )
}

export default Calendar
