import Users from '../model/user.Model.js'

export const addUsers = async (req,res) => {
    const users = req.body
    console.log(users)
    const newUsers = new Users(users) 
    try {
        await newUsers.save()
        res.status(201).json(newUsers)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
//    await Users.findOne({email: email},(err,result) => {
//         console.log(result)
//         console.log(err)
//         if (result) {
//             res.send({message:"Email is already registered.!"})
//         }else{
//             newUsers.save()
//             res.status(201).json(newUsers)
//         }
//     })
}