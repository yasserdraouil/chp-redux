import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'

const Edit = ({task}) => {
    
const [show, setShow] = useState(false);
const [newTask, setnewTask] = useState(task.text)
const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
      handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change the Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={newTask} onChange={(e) => setnewTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}