import React, { useState, useContext, useRef, useEffect } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoSearchSharp } from "react-icons/io5";
import SearchResults from '../SearchResults/SearchResults';
import { TaskContext } from '../../Context/TaskContext';
import taskProps from '../../Types/TaskSchema';
import './searchbar.css'



export default function SearchBar() {
    const [searchTask, setSearchTask] = useState('');
    const [searchResults, setSearchResult] = useState<taskProps[]>([]);
    const [showResults, setShowResults] = useState(false); 
    const { allTasks } = useContext(TaskContext);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTask(value);
        if (value === '') {
            setShowResults(false); 
        } else {
            const results = allTasks.filter(task => task.title.toLowerCase().includes(value.toLowerCase()));
            setSearchResult(results);
            setShowResults(true); 
        }
    };

    useEffect(() => {

        const handleClick = (event: any) => {
            if (modalRef.current && modalRef.current.contains(event?.target)) {
                console.log('Clique dentro da div!');
            } else {
                setShowResults(false)
            }
        };
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);


    return (
        <div className='searchbar'>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <IoSearchSharp style={{ width: "30px" }} />
                </InputLeftElement>
                <Input
                    value={searchTask}
                    type='text'
                    placeholder='Digite o título da tarefa'
                    onChange={handleChange} 
                    style={{ width: "450px",color:"black" }}
                />
            </InputGroup>

            {showResults && (
                <div ref={modalRef}>
                    <SearchResults value={searchResults} />
                </div>
            )}
        </div>
    );
}