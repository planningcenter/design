[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Generic badge](https://img.shields.io/badge/maintained%20by-global%20design-green.svg)](https://shields.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CircleCI](https://circleci.com/gh/planningcenter/design.svg?style=svg)](https://circleci.com/gh/planningcenter/design)

# design

Global Design supported packages

## Packages

- [@planningcenter/avatar](/planningcenter/avatar)
- [@planningcenter/browserslist-config](/planningcenter/browserslist-config)
- [@planningcenter/components](/planningcenter/components)
- [@planningcenter/resource-header](/planningcenter/resource-header)
- [@planningcenter/symbol](/planningcenter/symbol)
- [@planningcenter/system](/planningcenter/system)
- [@planningcenter/text](/planningcenter/text)
- [@planningcenter/topbar](/planningcenter/topbar)
- [@planningcenter/typeface](/planningcenter/typeface)
- [@planningcenter/url](/planningcenter/url)
- [@planningcenter/utilities](/planningcenter/utilities)
- [@planningcenter-experimental/button](/planningcenter-experimental/button)
- [@planningcenter-experimental/finder](/planningcenter-experimental/finder)

## Scripts

Common scripts:

| Command                          | Description                                                                        |
| :------------------------------- | :--------------------------------------------------------------------------------- |
| `npm test` (`--watch`)           | Run tests for all packages                                                         |
| `npm run dev`                    | Start development server for [Next.js](https://nextjs.org) app in [/pages](/pages) |
| `npm run spec`                   | Start Cypress integration test runner for browser-run component and CSS specs      |
| `lerna run build`                | Build all projects                                                                 |
| `lerna publish`                  | Publish all changed packages                                                       |
| `lerna changed`                  | List local packages that have changed since the last tagged release                |
| `lerna create <name> [location]` | Create new package, with `name`, at `location`                                     |
| `lerna help`                     | See all the other things you can do with Lerna                                     |

## Project navigation

| File/Dir                       | Why it's there                                                                                                                                                             |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cypress/`                     | Component specs and CSS API integrity tests                                                                                                                                |
| `pages/`                       | Pages for [Next.js](https://nextjs.org)-generated documentation                                                                                                            |
| `pages-support/`               | Shared components in support of documentation                                                                                                                              |
| `planningcenter/`              | Packages published to the [`@planningcenter` npm org](https://www.npmjs.com/org/planningcenter).<br />**Components design and specified in collaboration with all teams.** |
| `planningcenter-experimental/` | Packages published to the [`@planningcenter` npm org](https://www.npmjs.com/org/planningcenter)<br />**Components design by Global Design for app teams.**                 |
| `babel.config.js`              | Babel config for tests                                                                                                                                                     |
| `cypress.json`                 | Cypress config. Cypress is the browser-controlled spec test-runner                                                                                                         |
| `jest.config.js`               | Config for Jest. Just runs unit tests for non-UI libraries like `system` and `utilities`                                                                                   |
| `next.config.js`               | Config for Next.js-generated documentation                                                                                                                                 |
| `.circleci/config.yml`         | CircleCI config for continuous integration                                                                                                                                 |

## Component navigation

There are several types of projects included here.  
This legend applies primarily to component packages like `Avatar`, `Text`, `ResourceHeader` etc.  
Projects like `system`, `typography`, and `url` (that only export one type of resource) may follow different practices.

| File/Dir       | Why it's there                                                              |
| :------------- | :-------------------------------------------------------------------------- |
| `css/`         | Built CSS files. **Published to NPM**                                       |
| `dist/`        | Built JS modules **Published to NPM** (not committed)                       |
| `src/`         | Source JS modules                                                           |
| `package.json` | npm publishing details and the source of truth for generative documentation |
| `README.md`    | Resources for commiting to the package. Documentation lives in `pages/`     |

## Setup

```bash
npm i -g lerna
git clone git@github.com:planningcenter/design.git ~/Code/design
cd ~/Code/design
lerna bootstrap # install and link all package-local dependencies
npm run dev
```
