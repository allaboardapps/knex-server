import './env'
import config from './config'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'express-pino-logger'

import apiRouter from './routes/apiRoutes'
import rollbar from './services/rollbar'

const app = express()
const PORT = config.get('port')

app.use(cors())
app.use(helmet())
app.use(pino())
app.use(rollbar.errorHandler())
app.use(apiRouter)

const server = app.listen(PORT, (): void => {})

export default server
