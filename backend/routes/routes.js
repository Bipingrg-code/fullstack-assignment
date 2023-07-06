import express from 'express'
import { addUsers } from '../controller/user.Controller.js'
const router = express.Router()

router.post('/signup', addUsers)


export default router