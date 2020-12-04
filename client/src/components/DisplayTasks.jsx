import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';
import {Button} from '@material-ui/core';
import styles from '../css/DisplayTasks.module.css';

const DisplayTasks = ({tasks, deleteById, priority}) => {
    const addTask = (e) => {
        navigate("/new");
    }
    
    const finished = (logic) => {
        return logic ? "Finished" : "Get it done!"
    }

    const finishTask = (id) => {
        deleteById(id);
        navigate("/tasks");
    }

    const filter = (e) => {
        priority(e);
        navigate("/filterpriority");
    }

    return(
        <div>
            <h1>Get It Done</h1>
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
            <Button variant="contained" color="primary" disableElevation onClick={e => addTask()}>Add Task</Button>
            <div>
                <button className={styles.filterButton1} value = "High" onClick={e => filter(e.target.value)}>High</button>
                <button className={styles.filterButton2} value = "Low" onClick={e => filter(e.target.value)}>Low</button>
            </div>
        </div>
    )
}

export default DisplayTasks;