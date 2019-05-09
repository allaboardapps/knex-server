import express from 'express'
const apiRouter = express.Router()
import bodyParser from 'body-parser'
const urlencodedParser = bodyParser.urlencoded({ extended: false })

apiRouter.get(
  '/api/v1',
  urlencodedParser,
  (req, res): void => {
    res.render('index')
  },
)

export default apiRouter
