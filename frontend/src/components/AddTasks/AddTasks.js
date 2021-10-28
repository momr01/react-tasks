import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { isEmpty } from 'lodash'
import { ReactComponent as Send } from '../../assets/send.svg'
import url from '../../helpers/url'
import axios from 'axios'

import './AddTasks.scss'

export default function AddTasks(props) {
    const {setReloadTasks} = props
    const [task, setTask] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        //console.log('Formulario enviado...')
        //console.log(task)
        if(!isEmpty(task)) {
            await axios.post(`${url.back}`, {name: task})
            setTask("")
            setReloadTasks(true)
        }
    }
    return (
       <Form onSubmit={onSubmit} className="add-tasks">
           <input 
             type="text"
             placeholder="Nueva tarea..."
             onChange={(e) => setTask(e.target.value)}
             value={task}
           />
           <Button type="submit">
                <Send />
           </Button>
       </Form>
    )
}
