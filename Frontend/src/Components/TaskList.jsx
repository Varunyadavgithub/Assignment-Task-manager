import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };
    fetchTasks();
  }, []);

  const handleUpdate = (task) => {
    setSelectedTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setShowModal(true);
  };

  const handleDelete = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://localhost:8000/api/v1/tasks/${taskId}`);
        setTasks(tasks.filter((task) => task._id !== taskId));
      } catch (error) {
        console.error("There was an error deleting the task!", error);
      }
    }
  };

  const handleSave = async () => {
    try {
      const updatedTask = { title, description, status };
      await axios.put(
        `http://localhost:8000/api/v1/tasks/${selectedTask._id}`,
        updatedTask
      );
      setTasks(
        tasks.map((task) =>
          task._id === selectedTask._id ? { ...task, ...updatedTask } : task
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("There was an error updating the task!", error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">My Task List</h1>
      <Row>
        {tasks.map((task) => (
          <Col md={4} key={task._id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">Status: {task.status}</small>
                </Card.Footer>
                  <div className="d-flex justify-content-end mt-2">
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleUpdate(task)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </Button>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for editing task */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="status" className="mt-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TaskList;
