// imports file
const userControllers = require('./users.controllers')

const getAllUser = (req, res) => {
    const data = userControllers.findAllUser()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id

    const data = userControllers.findUserById(id)

    if(id){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid Id'})
    }
}

const postNewUser = (req ,res) => {
    const {first_name,last_name, email, password, birthday} = req.body

    if(first_name && last_name && password){
        const data = userControllers.findNewUser({first_name,last_name, email, password, birthday})
        res.status(201).json(data)
    } else{
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'string*',
                last_name: 'string',
                email: 'string*',
                password: 'string*',
                birthday: 'YYYY/MM/DD'
            }
        })
    }
}

module.exports = {
    getAllUser,
    getUserById,
    postNewUser
}