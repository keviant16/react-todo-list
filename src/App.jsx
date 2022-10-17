import React, { useState } from 'react';
import {
  Button,
  Col, Container, Form, ListGroup, Row,
} from 'react-bootstrap';
import './App.css';

function App() {
  const [todoList, settodoList] = useState([]);
  const [input, setinput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoList.length + 1 === 8) return;
    settodoList((prev) => ([...prev, input]));
    setinput('');
  };

  const deleteTask = (e, selectTask) => {
    e.preventDefault();
    const filter = todoList.filter((task) => task !== selectTask);
    settodoList(filter);
  };

  return (
    <Container className="block">
      <Row className="block__item block-head">
        <Col>
          <h1 className="block-head__title">TO DO LIST</h1>
          <span className={`block-head__counter ${todoList.length === 7 ? 'block-head__counter--error' : ''}`}>
            {`${todoList.length}/7  ${todoList.length === 7 ? 'Max capacity reached, you can no longer add a task' : ''}`}
          </span>
        </Col>
      </Row>
      <Row className="block__item block-form">
        <Col>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="taskInput">
              <Form.Label>Enter a new task : </Form.Label>
              {' '}
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setinput(e.target.value)}
              />
              {' '}
              <Button type="submit" className="block-form__button block-form__button--add">Add</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="block__item block-list-group">
        <Col>
          <ListGroup>
            {todoList && todoList.map((item) => (
              <ListGroup.Item className="block-list-group__item" key={item}>
                <div>
                  {item}
                </div>
                <div>
                  <Button
                    className="block-form__button block-form__button--delete"
                    onClick={(e) => deleteTask(e, item)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
