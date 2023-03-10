import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get("/", (req, res) => {
    res.send("Success!");
})

// Create a server that listens to the specified port
app.listen(8000, () => console.log("Server is listening on port 8000"));
