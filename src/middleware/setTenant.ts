const setTenant = (req, res, next): any => {
  const tenants = {
    ['localhost']: '00003',
    ['allaboardapps.ngrok.io']: '00002',
    ['compliance.ngrok.io']: '00001',
  }

  res.tenant = tenants[req.hostname]

  next()
}

export default setTenant
