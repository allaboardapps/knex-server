import express from 'express'
import request from 'supertest'
import apiRoutes from '../../src/routes/apiRoutes'

const initRoute = (): any => {
  const app = express()
  app.use(apiRoutes)
  return app
}

describe('GET /api/v1/test', (): void => {
  it('should fetch the json at the endpoint', async (): Promise<void> => {
    const server = initRoute()

    const response = await request(server)
      .get('/api/v1/test')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body.test).toBe('pass')
  })
})
