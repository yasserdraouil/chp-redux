import { useState } from 'react';
import { useDispatch } from "react-redux";
import {Button, Form} from 'react-bootstrap'
import './AddTask.css'

// import actions
import { addTask } from '../../JS/Actions/ListTask';

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

const handleAdd = (e) => {
    e.preventDefault();
  if (text) {
    dispatch(addTask({id : Math.random(), text, isDone : false}))
    setText("");
    } else {
        alert("cant add an empty")
    }
};

    return (
        <Form onSubmit={handleAdd} className="add-task-container">
            <Form.Control 
                type="text"
                placeholder="Enter task titel ..."
                className="input-task"
                onChange = {(e) => setText(e.target.value)}
                value = {text}
            />
            <Button variant="light" onClick = {handleAdd}>
                Add
            </Button>
        </Form>
    )
}

export default AddTask