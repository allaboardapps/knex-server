import './env'
import config from './config'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'express-pino-logger'

import apiRouter from './routes/apiRoutes'
import rollbar from './services/rollbar'
import setAuthCredentials from './middleware/setAuthCredentials'
import setDatastore from './middleware/setDatastore'
import setTenant from './middleware/setTenant'

const app = express()
const PORT = config.get('port')

app.use(cors())
app.use(pino())
app.use(helmet())
app.use(setTenant)
app.use(setAuthCredentials)
app.use(setDatastore)
app.use(apiRouter)
app.use(rollbar.errorHandler())

const server = app.listen(PORT, async (): Promise<void> => {})

export default server
