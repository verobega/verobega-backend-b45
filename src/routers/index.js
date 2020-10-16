import express from 'express'
import userRouter from './UserRouter.js'
import authRouter from './AuthRouter.js'
import postRouter from './PostRouter.js'
import products from './products'

const router = express.Router()

router.use(userRouter)
router.use(authRouter)
router.use(postRouter)
router.use(products)

export default router