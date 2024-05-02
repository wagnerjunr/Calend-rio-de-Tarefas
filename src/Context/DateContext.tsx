import { createContext, ReactNode, useState, useEffect, useContext } from "react"
import { TaskContext } from "./TaskContext";
import { dataProps } from "../Types/TaskSchema";


type DataProviderProps = {
    children: ReactNode;
}

type DataContextProps = {
    dataTasks: dataProps[];
    setDataTasks?: () => void;
}
const initialValue = {
    dataTasks: [{
        id:'',
        title: '',
        start: '',
        end: '',
    }],
    setDataTasks: () => { },
} as DataContextProps

export const DataContext = createContext<DataContextProps>(initialValue)

export const DataContextProvider = ({ children }: DataProviderProps) => {
    const { allTasks } = useContext(TaskContext)
    
    const [dataTasks, setDataTasks] = useState(initialValue.dataTasks);

    useEffect(() => {
        const tasks = allTasks.map(task => ({
          id:String(task.id),
          title: task.title,
          start: String(task.startDate),
          end: String(task.endDate)
        }));
    
        setDataTasks(tasks);
      }, [allTasks]);

    return (
        <DataContext.Provider value={{ dataTasks }}>
            {children}
        </DataContext.Provider>
    )
}
