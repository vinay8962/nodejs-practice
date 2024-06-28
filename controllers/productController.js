const { productData } = require("../data/exampleData")

const getProduct = (req , res) => {
    res.status(200).json(productData)
};

module.exports = {
    getProduct
}