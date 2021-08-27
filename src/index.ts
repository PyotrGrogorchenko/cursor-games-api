/* eslint-disable no-console */
import 'colors'
import cors, { CorsOptions } from 'cors'
import express from 'express'
import { db } from './models/index'
import { scoreRoutes } from './routes/score.routes'
import { usersRoutes } from './routes/users.routes'

export const app = express()

const corsOptions: CorsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.sequelize.sync()
  .then(() => {console.log('Sequelize.sync OK'.green)})
  .catch((err: any) => console.log('Sequelize.sync ERROR'.red, err))

app.get('/', (req: any, res: any) => {
  res.json({ message: 'Welcome to cursor-games api' })
})

usersRoutes(app)
scoreRoutes(app)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
