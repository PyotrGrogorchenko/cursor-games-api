import { db } from '../../models/index'

const { Tokens } = db

export const userIsAuth = async (token: string) => {
  try {
    const tokenItem = await Tokens.findOne({ where: { token } })
    console.log('tokenItem', tokenItem)
    return 0
    // return tokenItem ? tokenItem.userId : 0
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return 0
  }

  // const status = Tokens.findOne({ where: { token } })
  //   .then((data: any) => (data !== null ? data.id : false))
  //   .catch((err: { message: any }) => {
  //     // eslint-disable-next-line no-console
  //     console.log(err)
  //   })
}

export enum ErrorName {
  WRONG_API = 'Wrong API',
  AUTH_CONFLICT = 'User already in system',
  RECORD_REACTION_CONFLICT = 'Reaction is already set',
  INTERNAL_ERROR = 'Something went wrong',
  UNAUTHORIZED = 'Unauthorized',
  NOT_FOUND = 'Not found',
  FORBIDDEN = 'Access denied',
  USER_NOT_CREATED = 'User not created',
  TOKEN_NOT_CREATED = 'Token not created',
  CATCH_ERROR = 'Something went wrong',
  DISPLAY_NAME_MUST_BE_STRING = 'Display name must be string'
}

export const createBadResponse = (errorName: ErrorName) => ({
  message: errorName
})
