/* eslint-disable no-console */
import 'colors'
import cors, { CorsOptions } from 'cors'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc, { Options } from 'swagger-jsdoc'
import { db } from './models/index'
import { scoreRoutes } from './api/v1/routes/score.routes'
import { userRoutes } from './api/v1/routes/user.routes'

export const app = express()

const corsOptions: CorsOptions = {
  origin: '*',
  credentials: true
}
app.use(cors(corsOptions))

const swaggerOptions: Options = {
  openapi: '3.0.0',
  definition: {
    info: {
      title: 'Cursor-games-api',
      version: '1.0.0',
      description: 'cursor-games-api'
    },
    host: `${process.env.NODE_ENV === 'production' ? 'https://cursor-games-api.herokuapp.com' : 'http://localhost:8000'}/api/`,
    basePath: 'v1',
    schemes: ['https', 'http'],
    tags: [
      {
        name: 'User',
        description: 'User operations'
      },
      {
        name: 'Score',
        description: 'Score operations'
      }
    ]
  },
  apis: ['./src/api/v1/routes/*.ts']
}
const swaggerSpecs = swaggerJsdoc(swaggerOptions)
app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.sequelize.sync()
  .then(() => {console.log('Sequelize.sync OK'.green)})
  .catch((err: any) => console.log('Sequelize.sync ERROR'.red, err))

app.get('/', (req: any, res: any) => {
  res.json({ message: 'Welcome to cursor-games api' })
})

userRoutes(app)
scoreRoutes(app)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
