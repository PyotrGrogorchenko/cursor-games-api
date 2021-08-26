import { ReqUserCreate } from 'src/types'
import { userIsAuth, createBadResponse, ErrorName } from './utils/helpers'
import { db } from '../models/index'

const { Users, Tokens } = db

export const create = async (req: ReqUserCreate, res: any) => {
  try {
    const isAuth = await userIsAuth(req.headers.authorization)

    if (isAuth) {
      res.status(409).send(createBadResponse(ErrorName.AUTH_CONFLICT))
      return
    }

    const { displayName } = req.body
    if (typeof displayName !== 'string') {
      res.status(400).send(createBadResponse(ErrorName.DISPLAY_NAME_MUST_BE_STRING))
      return
    }

    let { avatar } = req.body
    if (typeof avatar !== 'string') {
      avatar = undefined
    }

    const user = {
      displayName,
      avatar
    }
    const newUser: any = await Users.create(user)

    if (!newUser) {
      res.status(500).send(createBadResponse(ErrorName.USER_NOT_CREATED))
      return
    }

    const token = {
      userId: newUser.id,
      token: req.headers.authorization
    }

    const newToken = await Tokens.create(token)

    if (!newToken) {
      res.status(500).send(createBadResponse(ErrorName.TOKEN_NOT_CREATED))
      return
    }

    res.status(201).send(newUser)
  } catch (err) {
    res.status(500).send(
      createBadResponse(ErrorName.CATCH_ERROR)
    )
  }
}
