import { Router, Express } from 'express'
import { get, save } from '../controllers/score.controller'

export const scoreRoutes = (app: Express) => {
  const router = Router()
  router.post('/', save)
  router.get('/:gameId', get)
  app.use('/api/score', router)
}
