const { Router } = require('express')
const router = Router()
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/tasks.controller')

router.route('/')
    .get(getTasks)
    .post(createTask)

router.route('/:id')
    .put(updateTask)
    .delete(deleteTask)


    module.exports = router;