const tasksCtrl = {};

const Task = require('../models/Task')

tasksCtrl.getTasks = async (req, res) => {
    const tasks = await Task.find().sort({completed: 1});
    res.json(tasks)
}

tasksCtrl.createTask = async (req, res) => {
    //console.log(req.body)
    const { name } = req.body
    const newTask = new Task({
        name
    })
    console.log(newTask)
    await newTask.save()
    res.json({message: 'TAREA CREADA EXITOSAMENTE'})
}

tasksCtrl.updateTask = async (req, res) => {
    const { completed } = req.body
    
    await Task.findByIdAndUpdate(req.params.id, {
        completed
    })

    
    res.json({message: 'Task modificada con exito'})
}

tasksCtrl.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)

    res.json({message: 'Task eliminada da la BD'})
}


module.exports = tasksCtrl