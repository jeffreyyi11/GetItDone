const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/tasksDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})
    .then(() => console.log("connected to database"))
    .catch(error => console.log("failed to connect", error));