import { Router, Express } from 'express'
import { get, save } from '../controllers/score.controller'

export const scoreRoutes = (app: Express) => {
  const router = Router()

  /**
  * @openapi
  * /score:
  *   post:
  *     tags: [Score]
  *     summary: Save score
  *     parameters:
  *     - name: authorization
  *       in: headers
  *       description: userId
  *       required: true
  *       schema:
  *         type: integer
  *     - name: scoreRequest
  *       in: body
  *       description: Game data
  *       required: true
  *       schema:
  *         type: object
  *         properties:
  *           gameId:
  *             type: string
  *           score:
  *             type: integer
  *           userId:
  *             type: integer
  *     responses:
  *       200:
  *         description: Ok, score saved
  *       201:
  *         description: Ok, score saved
  *       400:
  *         description: Wrong API
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  *               default: Wrong API
  *       401:
  *         description: Unauthorized
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  *               default: Unauthorized
  *       500:
  *         description: Unexpected error
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  */
  router.post('/', save)

  /**
  * @openapi
  * /score/{gameId}:
  *   get:
  *     tags: [Score]
  *     summary: Get score
  *     parameters:
  *     - name: authorization
  *       in: headers
  *       description: userId
  *       required: true
  *       schema:
  *         type: integer
  *     - name: gameId
  *       in: path
  *       description: gameId
  *       required: true
  *       schema:
  *         type: string
  *     responses:
  *       200:
  *         description: Ok
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             score:
  *               type: integer
  *       401:
  *         description: Unauthorized
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  *               default: Unauthorized
  *       500:
  *         description: Unexpected error
  *         content: application/json
  *         schema:
  *           type: object
  *           properties:
  *             message:
  *               type: string
  */
  router.get('/:gameId', get)
  app.use('/api/v1/score', router)
}
