import express from 'express'
import { addUsers,loginUser } from '../controller/user.Controller.js'
import { uploadProducts } from '../controller/product.Controller.js'

const router = express.Router()

router.post('/signup', addUsers)
router.post('/login',loginUser)
router.post('/uploadProduct', uploadProducts)

export default router