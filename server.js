const express = require("express");
const mongoose = require("mongoose");
const userRouts = require("./routes/user.js");
const empRouts = require("./routes/employee.js");

const app = express();
const DB_CONNECTION_STRING = "mongodb+srv://paramanilkumar:b3HTgwT7ldZyw0Eg@cluster0.pj3at.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err);
});

const SERVER_PORT = 8091;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Fixed typo here

app.use("/api/v1/user", userRouts);
app.use("/api/v1/emp", empRouts);

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>");
    });

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
