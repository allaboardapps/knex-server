import './env'
import config from './config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import rollbar from './services/rollbar'
import apiRouter from './routes/apiRoutes'

const PORT = config.get('port')
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(rollbar.errorHandler())
app.use(apiRouter)

const server = app.listen(
  PORT,
  (): void => {
    console.log(`index > app.listen > Listening on port ${PORT}`)
    console.log(`index > app.listen > Environment is ${process.env.NODE_ENV}`)
  },
)

export default server
