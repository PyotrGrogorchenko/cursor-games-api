import Validator from 'validatorjs'
import { userIsAuth, createBadResponse, ErrorName } from './utils/helpers'
import { db } from '../models/index'
import { scoreSaveDataRules } from './utils/requestDataVaidators'

const { Scores } = db

export const save = async (req: any, res: any) => {
  try {
    const { authorization } = req.headers
    const isAuth = await userIsAuth(authorization)

    if (!isAuth) {
      res.status(401).send(
        createBadResponse(ErrorName.UNAUTHORIZED)
      )
      return
    }

    const validation = new Validator(req, scoreSaveDataRules)

    if (validation.fails()) {
      res.status(400).send(
        createBadResponse(ErrorName.WRONG_API)
      )
      return
    }

    const { gameId, score } = req.body

    const [scoreItem, created] = await Scores.findOrCreate({
      where: {
        userId: authorization,
        gameId
      },
      defaults: {
        score
      }
    })

    if (!created) {
      // @ts-ignore
      scoreItem.score = score
      await scoreItem.save()
    }

    res.status(201).send()
  } catch (err) {
    res.status(500).send(
      createBadResponse(ErrorName.CATCH_ERROR)
    )
  }
}

export const get = async (req: any, res: any) => {
  try {
    const { authorization } = req.headers
    const isAuth = await userIsAuth(authorization)

    if (!isAuth) {
      res.status(401).send(
        createBadResponse(ErrorName.UNAUTHORIZED)
      )
      return
    }

    const { gameId } = req.params

    const scoreItem = await Scores.findOne({
      where: {
        userId: authorization,
        gameId
      }
    })

    // @ts-ignore
    res.status(200).send({ score: scoreItem ? scoreItem.score : 0 })
  } catch (err) {
    res.status(500).send(
      createBadResponse(ErrorName.CATCH_ERROR)
    )
  }
}
