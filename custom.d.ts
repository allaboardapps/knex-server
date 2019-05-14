declare namespace Express {
  export interface Response {
    locals: {
      connectionString: string
      tenantId: string
    }
  }
}
