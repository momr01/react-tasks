const { Schema, model} = require('mongoose')

const tasksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Task', tasksSchema);