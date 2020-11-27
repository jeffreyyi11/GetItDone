const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter a Task"]
    },
    priority: {
        type: String,
        required: [true, "How important is the task?"]
    },
    description: {
        type: String,
        required: [true, "What do you need to do?"]
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

module.exports.Task = mongoose.model("Task", TaskSchema);