import './env'
import config from './config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// const Rollbar = require('rollbar');
const PORT = process.env.PORT || config.get('port')
// const rollbar = new Rollbar(keys.ROLLBAR_ACCESS_TOKEN);
import apiRouter from './routes/apiRoutes'

const app = express()
app.use(cors())
// app.use(rollbar.errorHandler());
app.use(morgan('dev'))

app.use(apiRouter)

const server = app.listen(
  PORT,
  (): void => {
    console.log(`index > app.listen > Listening on port ${PORT}`)
    console.log(`index > app.listen > Environment is ${process.env.NODE_ENV}`)
  },
)

export default server
