import Sequelize from 'sequelize'
import { Sequelize as SequelizeType } from 'sequelize-typescript'

export const scoreTable = (sequelize: SequelizeType) => {
  const Score = sequelize.define('score', {
    userId: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    gameId: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })

  return Score
}
