const express = require("express");
const app = express();
const mysql =require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');



app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);





app.use(bodyParser.urlencoded({ extended: true}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'log-regDB',
});


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const nama = req.body.nama;

    console.log(username,password,nama);

    bcrypt.hash(password, 10,(err, hash) => {
        // if (err) {
        //     console.log(err);
        // }
        db.query(
            "INSERT INTO users (username, password,nama) VALUES (?,?,?)",
            [username,hash,nama],
            (err, result) => {
                console.log(err);
            }
        );
        
    });
});

app.listen('3001', () => {
    console.log("server running");
})