const { userReview } = require('../data/exampleData')

const getReview = (req , res) => {
    res.status(200).json(userReview)
};

module.exports = {
    getReview
}