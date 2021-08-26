import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

require('dotenv').config({ path: process.env.NODE_ENV === 'development' ? '.env-dev' : '.env' })

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,

  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

export const sequelize: Sequelize = new Sequelize(sequelizeOptions)
