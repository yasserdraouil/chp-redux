import React from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import Task from '../Task/Task';
import {Button} from 'react-bootstrap';

const ListTask = () => {
    const [status, setStatus] = useState("all")
    const list = useSelector((state) => state.listReducer.listTasks);
    return (
        <div>
            <Button variant="outline-primary" onClick = {() => setStatus("all")} >All</Button>
            <Button variant="outline-primary" onClick = {() => setStatus("done")}>Done</Button>
            <Button variant="outline-primary" onClick = {() => setStatus("undone")}>Undone</Button>
            <h2>ListTask</h2>
            {status==="done"
            ? list
            .filter((el) => el.isDone === true)
            .map((el) => <Task task={el} key={el.id}/>)
            :status==="undone"
            ? list
            .filter((el) => el.isDone === false)
            .map((el) => <Task task={el} key={el.id}/>)
            : list.map((el) => <Task task= {el} key={el.id} />)
        }
        </div>
    )
}

export default ListTask