import { sequelize } from '../config/db.config'
import { userTable } from './user.model'
import { tokenTable } from './token.model'
import { scoreTable } from './score.model'

export const db = {
  sequelize,
  Users: userTable(sequelize),
  Tokens: tokenTable(sequelize),
  Scores: scoreTable(sequelize)
}

db.Users.hasMany(db.Tokens)
db.Users.hasMany(db.Scores)
