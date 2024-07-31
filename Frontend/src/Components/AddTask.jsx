import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/tasks", {
        title,
        description,
        status,
      });
      setTitle("");
      setDescription("");
      setStatus("Pending");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <h1 className="my-4">Add a new Task</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              required
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </Form.Control>
          </Form.Group>
          <Button className="my-4" variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTask;
