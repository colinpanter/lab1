const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};

const port = process.env.PORT || 8080;
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017");
mongoose.Promise = global.Promise;

const User = require("./user.js").model
const Task = require("./task.js").model

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Content-Type", "text/html");
    next();
});

app.get('/', function(req, res) {
    console.log("GET /")
    res.send('Welcome to Lab 10 API.');
});

app.post('/users', function(req, res) {
    console.log(`POST /users`)

    const user = new User();
    user.save((err, user) => {
        if (err){
            return res.sendStatus(500)
        }
        return res.status(200).send(JSON.stringify({'id': user._id}));
    })
});

app.get('/:userId/tasks', async (req, res) => {
    const userId = req.params.userId;
    console.log(`GET /${userId}/tasks`)

    const tasks = await Task.find({user: userId});
    res.send(tasks.map((task)=>task.toDTO()))
});

app.post('/:userId/tasks', async (req, res) => {
    const userId = req.params.userId;
    console.log(`POST /${userId}/tasks`)

    const name = req.body.name
    const task = new Task({name: name, user: userId});
    await task.save();
    res.send(task.toDTO())
});

app.put('/:userId/tasks/:taskId', async (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    console.log(`PUT /${userId}/tasks/${taskId}`)

    const task = await Task.findOne({_id: taskId})
    task.name = req.body.name
    await task.save()
    res.send(task.toDTO())
});

app.delete('/:userId/tasks/:taskId', async (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    console.log(`DELETE /${userId}/tasks/${taskId}`)

    await Task.deleteOne({_id: taskId})
    res.sendStatus(204)
});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`)
});