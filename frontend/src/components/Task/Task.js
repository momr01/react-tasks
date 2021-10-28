import React from 'react'
import { ReactComponent as Check } from '../../assets/check.svg'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import axios from 'axios'
import url from '../../helpers/url'

import './Task.scss'


export default function Task(props) {
    const {task, setReloadTasks} = props

    const completeTask = async () => {
        //console.log(task._id)
        let modifiedTask = {
            completed: !task.completed
        }

        await axios.put(`${url.back}/${task._id}`, modifiedTask)

        setReloadTasks(true)
    }

    const deleteTask = async () => {
        //console.log(task._id)

        await axios.delete(`${url.back}/${task._id}`)

        setReloadTasks(true)
    }

    return (
        <div className="task">
            <div className={task.completed ? "completed" : ""}>
                <Check className={task.completed ? "completed" : ""} onClick={completeTask}/>
            </div>
            <div>{task.name}</div>
            <div>
                <Delete onClick={deleteTask} />
            </div>
        </div>
    )
}
