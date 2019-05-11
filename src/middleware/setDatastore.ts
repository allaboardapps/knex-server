const setDatastore = (req, res, next): any => {
  const tenant = res.tenant.toUpperCase()
  res.connectionString = process.env[`TENANT_${tenant}_DB_CONNECTION`]

  next()
}

export default setDatastore
