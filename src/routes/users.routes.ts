import { Router, Express } from 'express'
import { create } from '../controllers/user.controller'

export const usersRoutes = (app: Express) => {
  const router = Router()
  router.post('/', create)
  app.use('/api/users', router)
}
