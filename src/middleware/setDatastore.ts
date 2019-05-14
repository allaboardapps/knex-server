const setDatastore = (req, res, next): any => {
  const tenantId = res.locals.tenantId.toUpperCase()
  res.locals.dbConnectionString = process.env[`${tenantId}_DB_CONNECTION`]

  console.log('res.locals.dbConnectionString', res.locals.dbConnectionString)

  next()
}

export default setDatastore
