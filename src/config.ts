import convict from 'convict'

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'staging', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port',
  },
})

config.loadFile(`./src/config/${process.env.NODE_ENV}.json`)
config.validate({ allowed: 'strict' })

export default config
