const express = require("express");
const route = express.Router();
const {getUser} = require('../controllers/userController')

route.get("/" , (req , res) => {
    res.send("User Data")
})

route.get("/data"  , getUser)

module.exports = route