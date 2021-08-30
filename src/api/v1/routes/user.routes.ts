import { Router, Express } from 'express'
import { create } from '../controllers/user.controller'

export const userRoutes = (app: Express) => {
  const router = Router()

  /**
  * @openapi
  * /user:
  *   post:
  *     tags: [User]
  *     summary: Sign in/up
  *     parameters:
  *     - name: authorization
  *       in: headers
  *       description: userId
  *       required: true
  *       schema:
  *         type: integer
  *     responses:
  *       201:
  *         description: Ok, user created
  *       409:
  *         description: Ok, user already in system
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  *               default: user already in system
  *       400:
  *         description: Bad Request
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  *       500:
  *         description: Unexpected error
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  */
  router.post('/', create)

  app.use('/api/v1/user', router)
}
