import {useState, useEffect} from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import AddTasks from './components/AddTasks';
import Task from './components/Task'
import {map, size} from 'lodash'
import axios from 'axios'
import url from './helpers/url'

import './App.scss'

export default function App() {
  const [tasks, setTasks] = useState(null)
  const [reloadTasks, setReloadTasks] = useState(false)

  //console.log(tasks)

  useEffect(()=> {
    async function loadTasks(){
      const result = await axios.get(`${url.back}`);
      //console.log(result.data)
      setTasks(result.data)
    }
    loadTasks()
    setReloadTasks(false)
  }, [reloadTasks])



  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Maximiliano Montaña</h1>
      </div>

      <Row className="todo">
        <Col
         className="todo__title"
         xs={{ span: 10, offset: 1 }}
         md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>

        <Col
         className="todo__list"
         xs={{ span: 10, offset: 1 }}
         md={{ span: 6, offset: 3 }}
        >
          {!tasks ? (
            <div className="loading">
              <Spinner animation="border" />
              <span>Cargando...</span>
            </div>
          ) : size(tasks) === 0 ? (
            <h3>No hay tareas</h3>
          ) : (
            map(tasks, (task, index) => (
              <Task key={index} task={task} setReloadTasks={setReloadTasks} />
            ))
          )}

         
        </Col>

        <Col
         className="todo__input"
         xs={{ span: 10, offset: 1 }}
         md={{ span: 6, offset: 3 }}
        >
          <AddTasks setReloadTasks={setReloadTasks} />
        </Col>
      </Row>
    </Container>
  );
}
