import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import DisplayTasks from './DisplayTasks';
import AddTask from './AddTask';
import FilterTask from './FilterTask';


const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [priorityLevel, setPriorityLevel] = useState("");

    useEffect (() => {
        axios.get("http://localhost:8000/task")
            .then(response => {
                console.log(response);
                setTasks(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const deleteById = (id) => {
        axios.delete(`http://localhost:8000/task/${id}`)
            .then(response => {
                console.log(response);
                removeTask(id);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task._id !== id))
    }

    const priority = (value) => {
        setPriorityLevel(value);
    } 

    return (
        <div>
            <Router>
                <DisplayTasks tasks={tasks} deleteById={deleteById} priority={priority} path="/tasks" />
                <AddTask addTask={addTask} path="/new" />
                <FilterTask tasks={tasks} deleteById={deleteById} priorityLevel={priorityLevel} path="/filterpriority" />
            </Router>
        </div>
    )
}

export default Main;