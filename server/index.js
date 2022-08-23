// import express from "express";

const cors = require('cors');
const dotenv = require('dotenv')
// import router from "./Router/routes.js"
const express = require('express');
const fs = require('fs');
const path = require('path');

// import fs from "fs";
// import path from "path";
dotenv.config();
const app = express();
app.use(cors())
app.get('/video', (req, res) => {
    res.sendFile('assets/intro3.mp4', { root: __dirname });
});


const Port= process.env.PORT
app.listen(Port, ()=> {
    console.log(`Server is Running at port ${Port}`)
})