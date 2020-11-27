import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import DisplayTasks from './DisplayTasks';
import AddTask from './AddTask';

const Main = () => {
    const [tasks, setTasks] = useState([]);

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

    return (
        <div>
            <Router>
                <DisplayTasks tasks={tasks} deleteById={deleteById} path="/tasks" />
                <AddTask addTask={addTask} path="/new" />
            </Router>
        </div>
    )
}

export default Main;