import {Router} from 'express'
import userRoutes from './user'

const router = Router()

router.use('/user', userRoutes)

export default router;