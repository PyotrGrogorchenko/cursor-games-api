import Sequelize from 'sequelize'
import { Sequelize as SequelizeType } from 'sequelize-typescript'

export const tokenTable = (sequelize: SequelizeType) => {
  const Token = sequelize.define('tokens', {
    userId: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Token
}
