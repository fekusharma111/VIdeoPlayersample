import express from "express";
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get("/video", (req, res) => {
    // res.status(200).json("HII from api")
    res.sendFile('', { root: __dirname });
})

export default router;