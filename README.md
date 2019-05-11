# Palmtree Server

## Priorities

- Auth0 integration
- Multitenant PG setup
- GraphQL integration

## Getting Started

1. Clone the repo with `git clone git@github.com:allaboardapps/palmtree-server.git`
1. Move into directory with `cd palmtree-server`
1. Ask administrator for `.env` file and place in directory root
1. It's likely helpful to install some global dependencies `npm install -g typescript eslint prettier nodemon`
1. Install repo dependencies with `npm install`

## Security

- Check for dependency updates with `npm outdated`
- Scan dependencies with `npm audit`
- Scan dependencies with the [snyk](https://app.snyk.io) service with `snyk auth` and `snyk monitor` (requires account)

## Continuous Integration

### Deployments

1. To deploy to [Codeship](https://codeship.com) and [Heroku](https://heroku.com), you must push or merge to the [master](https://github.com/allaboardapps/palmtree-server) branch
1. Codeship will pull the latest commit, run the build, and conduct any tests.
1. If the Codeship build passes, Heroku will pull the commit from Github to the [pipeline](https://dashboard.heroku.com/pipelines/e2278859-04e6-47f1-9bee-0e845409fe9c), and specifically, the [staging app](https://dashboard.heroku.com/apps/palmtree-server-staging)

### Codeship (CI)

- Project: [palmtree-server](https://app.codeship.com/projects/341212)

### Heroku (Hosting)

- Pipeline: [palmtree-server](https://dashboard.heroku.com/pipelines/e2278859-04e6-47f1-9bee-0e845409fe9c)
