import express from 'express'
import bodyParser from 'body-parser'
import { Pool } from 'pg'

const apiRouter = express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

apiRouter.get(
  '/api/v1/user',
  urlencodedParser,
  async (req, res): Promise<void> => {
    try {
      const { connectionString } = res
      const pool = new Pool({ connectionString })
      const client = await pool.connect()
      const results = await client.query('SELECT * FROM users')

      const user = {
        firstName: results.rows[0].first_name,
        lastName: results.rows[0].last_name,
        age: results.rows[0].age,
      }

      client.release()
      res.json(user)
    } catch (err) {
      console.log(err.stack)
    }
  },
)

apiRouter.get(
  '/api/v1/test',
  urlencodedParser,
  (req, res): void => {
    res.json({ test: 'pass' })
  },
)

export default apiRouter
