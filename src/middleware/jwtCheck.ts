import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://allaboardapps.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://palmtree-server-staging.herokuapp.com',
  issuer: 'https://allaboardapps.auth0.com/',
  algorithms: ['RS256'],
})

export default jwtCheck
