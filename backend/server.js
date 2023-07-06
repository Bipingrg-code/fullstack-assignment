import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Connection from './database/db.js'
import Routes from './routes/routes.js'

const app = express()
dotenv.config();
app.use(cors())
app.use(express.json())

//ROUTES
app.use('/',Routes)
// app.get('/',(req,res) => {
//     res.send("hello Node")
// })
// app.post('/signup',(req,res)=>{
//     const user= req.body; //getting data sent by the client in request body
//     console.log(user)
// })
//Database
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username,password)

//SERVER
const PORT = process.env.PORT || 8080
app.listen(`${PORT}`,()=>{
    console.log(`Server is running on port ${PORT}`)
})