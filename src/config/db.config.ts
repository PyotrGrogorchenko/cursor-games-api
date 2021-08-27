import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

require('dotenv').config({ path: process.env.NODE_ENV === 'development' ? 'env/.env-dev' : 'env/.env' })

const sequelizeOptions: SequelizeOptions = {
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)

if (process.env.NODE_ENV === 'production') {
  sequelizeOptions.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

export const sequelize: Sequelize = new Sequelize(String(process.env.DATABASE_URL), sequelizeOptions)
