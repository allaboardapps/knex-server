const setTenant = (req, res, next): any => {
  const tenants = {
    ['compliance.ngrok.io']: '00001',
    ['allaboardapps.ngrok.io']: '00002',
    ['palmtree-server-staging.herokuapp.com']: '00002',
    ['palmtree-server-production.herokuapp.com']: '00002',
    ['localhost']: '00003',
  }

  res.tenant = tenants[req.hostname]

  next()
}

export default setTenant
