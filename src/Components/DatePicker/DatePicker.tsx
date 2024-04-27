import React, { useContext, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from 'date-fns/locale/pt-BR';
import { TaskContext } from "../../Context/TaskContext";


import "react-datepicker/dist/react-datepicker.css";
import taskProps from "../../Types/TaskSchema";

const DatePickerComponent = () => {
    const { startDate,setStartDate,endDate, setEndDate} = useContext(TaskContext)

    registerLocale('ptBR', ptBR)

    useEffect(()=>{
      
    },[endDate])


    return (
        <div> <DatePicker
            showIcon
            locale="ptBR"
            selected={startDate} onChange={(date) => setStartDate(date)}
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
                showIcon
                locale="ptBR"
                selected={endDate} onChange={(date) => setEndDate(date)}
                selectsEnd
                endDate={endDate}
                minDate={startDate}
                dateFormat="Pp"
                showTimeSelect
                timeFormat="p"
                placeholderText="Selecione data e horário"
            /></div>
    )
}

export default DatePickerComponent
