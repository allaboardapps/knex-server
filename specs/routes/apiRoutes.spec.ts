import express from 'express'
import request from 'supertest'
import apiRoutes from '../../src/routes/apiRoutes'

// const initRoute = (): any => {
//   const app = express()
//   app.use(apiRoutes)
//   return app
// }

describe('GET /api/v1/', (): void => {
  it('should fetch the json at the endpoint', async (): Promise<void> => {
    const app = express()
    app.use(apiRoutes)

    const response = await request(app)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body.test).toBe('pass')
  })
})
