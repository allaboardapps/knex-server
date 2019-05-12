# Palmtree Server

## Priorities

- GraphQL integration
- Knex migration/backup setup

## Support Links

- [Auth0 Support](https://support.auth0.com/) - Authentication provider
- [AWS Support](https://aws.amazon.com/contact-us/) - Services provider
- [Heroku Support](https://help.heroku.com/) - Hosting provider
- [ElephantSQL Support](https://www.elephantsql.com/support.html) - Database provider
- [Twilio Support](https://support.twilio.com/hc/en-us) - Communications provider
- [SendGrid Support](https://support.sendgrid.com/hc/en-us) - Communications provider
- [Codeship Support](https://helpdesk.codeship.com/hc/en-us) - CI provider

## Status Links

- [Auth0 Status](http://status.auth0.com/) - Authentication provider
- [AWS Status](https://status.aws.amazon.com/) - Services provider
- [Heroku Status](https://status.heroku.com/) - Hosting provider
- [ElephantSQL Status](http://status.elephantsql.com/) - Database provider
- [Twilio Status](https://status.twilio.com/) - Communications provider
- [SendGrid Status](https://status.sendgrid.com/) - Communications provider
- [Codeship Status](https://www.codeshipstatus.com/) - CI provider

## Getting Started

1. Clone the repo with `git clone git@github.com:allaboardapps/palmtree-server.git`
1. Move into directory with `cd palmtree-server`
1. It's likely helpful to install some global dependencies `npm install -g typescript eslint prettier nodemon`
1. Install repo dependencies with `npm install`
1. ==> Ask administrator for untracked development `.env` file and place in directory root

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

## Product Development

### Trello (Planning)

- Card Tracker: [Guidant Tech](https://trello.com/b/FdLQw7i3/guidant-tech)

### Github (Issues)

- Issue Tracker: [palmtree-server](https://github.com/allaboardapps/palmtree-server/issues)

### Rollbar (Error Tracker)

- Dev: [palmtree-server-development](https://rollbar.com/palmtree-server-development/palmtree-server-development/)
- Staging: [palmtree-server-staging](https://rollbar.com/palmtree-server-staging/palmtree-server-staging/)
- Prod: [palmtree-server-production](https://rollbar.com/palmtree-server-production/palmtree-server-production/)
