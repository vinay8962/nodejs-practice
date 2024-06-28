const { userData } = require('../data/exampleData')

const getUser = (req , res) => {
       res.status(200).json(userData)
}

module.exports = {
    getUser
}