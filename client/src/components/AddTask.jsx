
import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';
import styles from '../css/DisplayTasks.module.css';

const AddTask = ({addTask}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    const [priorities] = useState(["High", "Low"]);

    const [errors, setErrors] = useState([]);

    const createTask = (e) => {
        e.preventDefault();
        const task = {  name: name,
                        description: description,
                        priority: priority,
                    };
        axios.post("http://localhost:8000/task", task)
            .then(response => {
                addTask(response.data);
                navigate('/tasks');
            })
            .catch(error => {
                const errorRes = error.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr);
            })
    }

    const goHome = (e) => {
        navigate('/tasks');
    }

    return (
        <div>
            <h1>Add Task</h1>
            <button className={styles.homeButton} onClick={e => goHome()}>Tasks</button>
            {errors.map((error, index) => <p key={index}>{error}</p>)}
            <form className={styles.form} onSubmit={createTask}>
                <div>
                    <div className={styles.formRow}>
                        <label>Name: </label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className={styles.formRow}>
                        <label>Description: </label>
                        <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className={styles.formRow}>
                        <label>Priority: </label>
                        <select value={priority} onChange={e => setPriority(e.target.value)}>
                            {
                                priorities.map((level, index) => (
                                    <option key={index} value={level}>{level}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <input className={styles.button} type="submit" value="Let's Get it Done" />
            </form>
        </div>
    )
}

export default AddTask;