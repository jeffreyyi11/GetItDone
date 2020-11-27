const {Task} = require("../models/task");

module.exports = {
    create: (req, res) => {
        Task.create(req.body)
            .then(task => res.json(task))
            .catch(error => res.status(400).json(error));
    },
    find: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => res.json(task))
            .catch(error => res.status(400).json(error));
    },
    findAll: (req, res) => {
        Task.find()
            .then(tasks => res.json(tasks))
            .catch(error => res.status(400).json(error));
    },
    update: (req, res) => {
        Task.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(task => res.json(task))
            .catch(error => res.status(400).json(error));
    },
    delete: (req, res) => {
        Task.deleteOne({_id: req.params.id})
            .then(task => res.json(task))
            .catch(error => res.status(400).json(error));
    }
}