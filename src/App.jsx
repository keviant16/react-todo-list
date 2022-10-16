import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, ListGroup, Row,
} from 'react-bootstrap';
import './App.css';

function App() {
  const [todoList, settodoList] = useState([]);
  const [input, setinput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    settodoList((prev) => ([...prev, input]));
  };

  return (
    <Container className="container">
      <Row className="container__row container__row--header">
        <Col>
          <h1>TO DO LIST</h1>
        </Col>
      </Row>
      <Row className="container__row  container__row--input">
        <Col>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="taskInput">
              <Form.Label>Enter a new task : </Form.Label>
              {' '}
              <Form.Control
                type="text"
                placeholder="Task: code a To Do List"
                value={input}
                onChange={(e) => setinput(e.target.value)}
              />
              {' '}
              <Button type="submit" className="add-button">Ajouter</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="container__row container__row--input">
        <Col>
          <ListGroup>
            {todoList && todoList.map((item) => (
              <ListGroup.Item className="" key={item}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
