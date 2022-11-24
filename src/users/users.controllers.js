const userDB = []

let id = 1

//get all
const findAllUser = () => {
    return userDB
}
// get by id
const findUserById = (id) => {
    const data = userDB.find(item => item.id == id)
    return data
}

// create new user
const findNewUser = (obj) =>{
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    userDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUser,
    findUserById,
    findNewUser
}
