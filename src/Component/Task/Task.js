import React from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {deleteTask, doneTask} from '../../JS/Actions/ListTask'
import Edit from '../Edit/Edit'
import './Task.css'

const Task = ({task}) => {
const dispatch = useDispatch()
    return (
        <div className="task-card">
            <span className={task.isDone ? "done" : null}>{task.text}</span>
            <Edit task ={task} />
            <Button variant="outline-primary" onClick={()=>dispatch(deleteTask(task.id))}>DELETE</Button>
            <Button variant="outline-primary" onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "undone" : "done"}</Button>
        </div>
    )
}

export default Task