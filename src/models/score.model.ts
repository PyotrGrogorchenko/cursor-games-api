import Sequelize from 'sequelize'
import { Sequelize as SequelizeType } from 'sequelize-typescript'

export const scoreTable = (sequelize: SequelizeType) => {
  const Score = sequelize.define('score', {
    gameId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })

  return Score
}
