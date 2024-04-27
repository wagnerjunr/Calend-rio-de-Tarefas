import { createContext, ReactNode, useState } from "react"
import taskProps from "../Types/TaskSchema";

type TaskProviderProps = {
    children: ReactNode;
}

type TaskContextProps = {
    startDate: Date | null;
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
    endDate: Date | null;
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
    allTasks: taskProps[];
    setAllTasks?: React.Dispatch<React.SetStateAction<taskProps[]>>;
}

const initialValue = {
    startDate: null,
    setStartDate: () => { },
    endDate: null,
    setEndDate: () => { },
    allTasks: [{
        id: 0,
        title: "",
        description: "",
        priority: "Baixa",
        startDate: null,
        endDate: null
    }]

} as TaskContextProps

export const TaskContext = createContext<TaskContextProps>(initialValue)

export const TaskContextProvider = ({ children }: TaskProviderProps) => {

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [allTasks, setAllTasks] = useState<taskProps[]>([])

    return (
        <TaskContext.Provider value={{ startDate, setStartDate, endDate, setEndDate, allTasks }}>
            {children}
        </TaskContext.Provider>
    )
}
