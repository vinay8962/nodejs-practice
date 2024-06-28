const express = require('express');
const dotenv = require('dotenv');
const productRoute = require('./routes/productRoutes')
const getUserReviewRoute = require('./routes/userReviewRoutes')
const getUserDataRoute = require("./routes/userRoutes")


dotenv.config();
const {port} = require('./config/config')
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/products', productRoute);
app.use('/userreview', getUserReviewRoute);
app.use('/userdata' , getUserDataRoute )
 

app.listen(port, () => {
    console.log(`server is running on https://localhost:${port}`);
});