// Importation des constantes 
import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ListTask"


// Les actions 
// addTask => newTask:{id:"", text:"", isDone:"false"}
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask,
    }
}

// addTask => id
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}

// addTask => id
export const doneTask = (id) => {
    return {
        type: DONE_TASK,
        payload: id,
    }
}

// editTask => id , nawTask
export const editTask = (id, newTask) => {
    return {
        type: EDIT_TASK,
        payload: { id, newTask },
    }
}