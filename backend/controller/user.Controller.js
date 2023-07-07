import Users from '../model/user.Model.js'

export const addUsers = async (req, res) => {
    const users = req.body
    //console.log(users)
    const newUsers = new Users(users)
    try {
        await newUsers.save()
        res.status(201).json(newUsers)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const loginUser = async (req, res) => {
    //console.log(req.body)
    const { email } = req.body
    await Users.findOne({ email: email }).then((result) => {
        if (result) {
            const sendData = {
                _id: result._id,
                fullname: result.fullname,
                email: result.email,
                password: result.password,
            }
            // console.log(sendData)
            res.send({ message: "Login sucessfully", alert:true, data: sendData })
        }else{
            res.send({ message: "This email is not valid",alert:false})
        }
    })
}

