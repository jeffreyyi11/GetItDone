const TaskController = require('../controllers/task.controller');

module.exports = (app) => {
    app.get("/task", TaskController.findAll),
    app.post("/task", TaskController.create),
    app.get("/task/:id", TaskController.find),
    app.put("/task/:id", TaskController.update),
    app.delete("/task/:id", TaskController.delete)
}