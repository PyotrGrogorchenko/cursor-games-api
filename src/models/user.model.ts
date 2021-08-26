import Sequelize from 'sequelize'
import { Sequelize as SequelizeType } from 'sequelize-typescript'

export const userTable = (sequelize: SequelizeType) => {
  const User = sequelize.define('users', {
    displayName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })

  return User
}
