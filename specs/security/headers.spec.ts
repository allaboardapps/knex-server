import request from 'supertest'
import server from '../../src/index'

describe('GET /api/v1/', (): void => {
  it('should not expose an x-powered-by header', async (): Promise<void> => {
    const response = await request(server)
      .get('/api/v1')
      .expect(200)

    expect(response.header['x-powered-by']).toBeUndefined()
  })
})
