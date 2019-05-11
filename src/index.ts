import './env'
import config from './config'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'express-pino-logger'

import apiRouter from './routes/apiRoutes'
import setTenant from './middleware/setTenant'
import setDatastore from './middleware/setDatastore'
import rollbar from './services/rollbar'

const app = express()
const PORT = config.get('port')

app.use(cors())
app.use(helmet())
app.use(pino())
app.use(rollbar.errorHandler())
app.use(setTenant)
app.use(setDatastore)
app.use(apiRouter)

const server = app.listen(PORT, async (): Promise<void> => {})

export default server
