const express = require('express');

const server = express();

//middlleware
server.use(express.json());

const users = [{
    name: "ahmed",
    id: 1,
}]

const port = 3000;


server.get('/', (req, res) => {
 
    res.json({message: "Hello"});
})

server.post("/post", (req, res) => {
    res.json("Test");
})

server.post("/users", (req, res) => {
        const data = req.body;
        console.log(data);

        if (!data.name || !data.id)
        {
            res.json("Please Enter name and id")
        }
        if (typeof(data.name) !== String || typeof(data.id) !== Number)
        {
            res.json("The Data is incorrectly formatted")
        }

        const user = {
            name: data.name,
            id: data.id
        }
        users.push(user)
        res.json({message:`New User has been created at id ${user.id}`});
})

server.get("/users", (req, res) => {
    res.json(users);
})

server.listen(1, (req, res) => {
    console.log(`server is running at http://localhost:${1}`);
})