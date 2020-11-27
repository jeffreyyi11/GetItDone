import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';
import styles from '../css/DisplayTasks.module.css';

const DisplayTasks = ({tasks, deleteById}) => {

    const finished = (logic) => {
        return logic ? "Finished" : "Get it done!"
    }

    const addTask = (e) => {
        navigate("/new");
    }

    const finishTask = (id) => {
        deleteById(id);
        navigate("/tasks");
    }

    return(
        <div>
            <h1>Get Shit Done</h1>
            <table className={styles.table}>
                <thead className={styles.head}>
                    <tr>
                        <td><h4>Task</h4></td>
                        <td><h4>Priority</h4></td>
                        <td><h4>Description</h4></td>
                        <td><h4>Completed</h4></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.sort((a,b) => a.priority.toLowerCase() > b.priority.toLowerCase() ? 1 : -1).map((task,index) => 
                        <tr key={index}>
                            <td className={styles.td}>{task.name}</td>
                            <td className={styles.td}>{task.priority}</td>
                            <td className={styles.td}>{task.description}</td>
                            <td className={styles.td}><button onClick={e => finishTask(task._id)}>{finished(task.completed)}</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <button onClick={e => addTask()}>Add Task</button>
            <div>
                <button onClick={e => getPriorityHigh()}>High</button>
                <button>Low</button>
            </div>
        </div>
    )
}

export default DisplayTasks;