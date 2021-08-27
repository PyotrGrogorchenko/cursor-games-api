import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

const sequelizeOptions: SequelizeOptions = {
  port: 5432,
  dialect: 'postgres',
  // dialectOptions: {
  //   ssl: {
  //     rejectUnauthorized: false
  //   }
  // },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

if (process.env.NODE_ENV === 'production') {
  sequelizeOptions.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

export const sequelize: Sequelize = new Sequelize(String(process.env.DATABASE_URL), sequelizeOptions)
