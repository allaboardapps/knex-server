import express from 'express'
import bodyParser from 'body-parser'

const apiRouter = express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

apiRouter.get(
  '/api/v1',
  urlencodedParser,
  (req, res): void => {
    res.json({ test: 'pass-fail' })
  },
)

export default apiRouter
