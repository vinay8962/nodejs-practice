const express = require("express");
const route = express.Router();
const {getReview} = require('../controllers/reviewController')

route.get("/" , (req , res) => {
    res.send("Review Data")
})

route.get("/data"  , getReview)

module.exports = route