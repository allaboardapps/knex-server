const setAuthCredentials = (req, res, next): any => {
  const { tenantId } = res.locals
  process.env.AUTH0_CLIENT_ID = process.env[`${tenantId}_AUTH0_CLIENT_ID`]
  process.env.AUTH0_DOMAIN = process.env[`${tenantId}_AUTH0_DOMAIN`]
  process.env.AUTH0_CLIENT_SECRET = process.env[`${tenantId}_AUTH0_CLIENT_SECRET`]

  next()
}

export default setAuthCredentials
