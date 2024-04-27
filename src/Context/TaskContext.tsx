import { createContext,ReactNode,useState } from "react"
import taskProps from "../Types/TaskSchema";

type TaskProviderProps = {
    children:ReactNode;
}

type TaskContextProps = {
    startDate:Date | null;
    setStartDate:React.Dispatch<React.SetStateAction<Date | null>>;
    endDate:Date | null;
    setEndDate:React.Dispatch<React.SetStateAction<Date | null>>;
    allTasks:taskProps[];
    setAllTasks?:React.Dispatch<React.SetStateAction<taskProps[]>>;
}

export const TaskContext = createContext<TaskContextProps | undefined> (undefined)

export const TaskContextProvider = ({children}:TaskProviderProps) =>{

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [allTasks,setAllTasks] = useState<taskProps[]>([]);

    return(
        <TaskContext.Provider value = {{startDate,setStartDate,endDate, setEndDate,allTasks}}>
            {children}
        </TaskContext.Provider>
    )
}
