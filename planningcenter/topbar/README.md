# TOPBAR

The shared planning center Product Topbar

## Install

Every planning center product manages it's own composition of Topbar components.  
They all have slightly different features.  
When starting a new project (rare), check out these existing Topbar compositions:

- [API](https://github.com/ministrycentered/api/blob/master/app/javascript/components/api_topbar.jsx)
- [Accounts](https://github.com/ministrycentered/accounts/blob/master/app/javascript/components/accounts_topbar.jsx)
- [Check-Ins](https://github.com/ministrycentered/check-ins/blob/master/app/javascript/components/checkins_topbar.js)
- [Giving](https://github.com/ministrycentered/giving/blob/master/app/javascript/application/components/giving_topbar.jsx)
- [Groups](https://github.com/ministrycentered/groups/blob/master/app/javascript/application/components/groups_topbar.js)
- [People](https://github.com/ministrycentered/people/blob/master/app/javascript/components/people_topbar.jsx)
- [Publishing](https://github.com/ministrycentered/publishing/blob/master/app/javascript/src/PublishingTopbar.jsx)
- [Resources](https://github.com/ministrycentered/resources/blob/master/app/javascript/components/ResourcesTopbar.jsx)
- [Registrations](https://github.com/ministrycentered/registrations/blob/master/app/javascript/components/registrations_topbar.jsx)
- [Services](https://github.com/ministrycentered/services/blob/master/app/javascript/components/ServicesTopbar.js)

## Upgrade

```bash
yarn add @planningcenter/topbar
```

## Develop

```bash
cd ~/Code/planningcenter/design/planningcenter/topbar
npm i
npm run dev
// server available at http://localhost:9000
```

## Migrate

These migration docs will guide you thru the process of updating to recent major releases.

- [Migrate to v6](./migration/v6.md)
- [Migrate to v5](./migration/v5.md)

## Changelog

This is a limited history.  
Topbar releases often require a coordinated effort across products and no app can stay an outdated version for very long.  
So, this CHANGELOG is a little lazy.

[CHANGELOG](./CHANGELOG.md)

## Story

If you like history,  
Here are the initial release notes with technical considerations and trade-offs.

[STORY](./docs/STORY.md)

## Help

I'm happy to help support a upgrade, diagnose an issue, and entertain requests.

Open a PR here and tag me @chantastic.  
Or hit me up in Slack @chan.
