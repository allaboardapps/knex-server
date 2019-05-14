module.exports = {
  test: {
    client: 'postgresql',
    connection: process.env.TEST_DATABASE_URL,
    pool: {
      min: process.env.TEST_DATABASE_POOL_MIN,
      max: process.env.TEST_DATABASE_POOL_MAX,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
  development: {
    client: 'postgresql',
    connection: process.env.DEVELOPMENT_DATABASE_URL,
    pool: {
      min: process.env.DEVELOPMENT_DATABASE_POOL_MIN,
      max: process.env.DEVELOPMENT_DATABASE_POOL_MAX,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
  staging: {
    client: 'postgresql',
    connection: process.env.STAGING_DATABASE_URL,
    pool: {
      min: process.env.STAGING_DATABASE_POOL_MIN,
      max: process.env.STAGING_DATABASE_POOL_MAX,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: process.env.PRODUCTION_DATABASE_URL,
    pool: {
      min: process.env.PRODUCTION_DATABASE_POOL_MIN,
      max: process.env.PRODUCTION_DATABASE_POOL_MAX,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
}
