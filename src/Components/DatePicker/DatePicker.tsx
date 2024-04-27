import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from 'date-fns/locale/pt-BR';


import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    
    registerLocale('ptBR', ptBR)

    useEffect(()=>{

        console.log(endDate?.getHours());
        // if (startDate !== null && endDate !== null && startDate.getTime() < endDate.getTime()) {
        //     console.log("Horario invalido")
        // }
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
