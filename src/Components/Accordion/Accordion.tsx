import React from 'react'
import { Box } from '@chakra-ui/react'
import { IoIosArrowDown } from 'react-icons/io'
import taskProps from '../../Types/TaskSchema'
import { format } from 'date-fns'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import './accordion.css'

type accordionProps = {
  task: taskProps
}

export default function AccordionComponent({ task }: accordionProps) {
  const startData = new Date(String(task.startDate))
  const dataFormatada = format(startData, "dd/MM 'às' HH:mm'h'")

  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton />
          <AccordionPanel pb={4} className="accordion-painel">
            <section>Descrição:{task.description}</section>
            <section>Data: {dataFormatada}</section>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
