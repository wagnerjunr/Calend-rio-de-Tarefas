import React, { useContext, useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale/pt-BR'
import { TaskContext } from '../../Context/TaskContext'

import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.css'
import taskProps from '../../Types/TaskSchema'

type dateProps = {
  date?: string | null
}

const DatePickerComponent = ({ date }: dateProps) => {
  const dateString = String(date)
  const [year, month, day] = dateString.split('-').map(Number)
  const dateObject: Date | null = new Date(year, month - 1, day)

  const { startDate, setStartDate, endDate, setEndDate, isError } =
    useContext(TaskContext)
  const [dateTaskCalendar, setDateTaskCalendar] = useState<Date | null>(
    dateObject
  )
  registerLocale('ptBR', ptBR)

  return (
    <div className="container-datepicker">
      <DatePicker
        className={isError ? 'datainvalida' : 'datepicker'}
        showIcon
        locale="ptBR"
        selected={date ? dateTaskCalendar : startDate}
        onChange={(date) => {
          setDateTaskCalendar(date)
          setStartDate(date)
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="Pp"
        showTimeSelect
        timeIntervals={30}
        timeFormat="p"
        placeholderText="Selecione data e horário"
      />
      <DatePicker
        className={isError ? 'datainvalida' : 'datepicker'}
        showIcon
        locale="ptBR"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        endDate={endDate}
        minDate={startDate}
        dateFormat="Pp"
        showTimeSelect
        timeFormat="p"
        placeholderText="Selecione data e horário"
      />
    </div>
  )
}

export default DatePickerComponent
