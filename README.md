[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Generic badge](https://img.shields.io/badge/maintained%20by-global%20design-green.svg)](https://shields.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# Design

Global Design supported packages

## Public packages

- [@planningcenter/browserslist-config](planningcenter/browserslist-config)
- [@planningcenter/components](planningcenter/components)
- [@planningcenter/experimetal](planningcenter/experimental)
- [@planningcenter/finder](planningcenter/finder)
- [@planningcenter/sweetalert2](planningcenter/sweetalert2)
- [@planningcenter/system](planningcenter/system)
- [@planningcenter/topbar](planningcenter/topbar)
- [@planningcenter/typeface](planningcenter/typeface)
- [@planningcenter/url](planningcenter/url)

## Scripts

Common scripts:

| Command           | Description                                                         |
| :---------------- | :------------------------------------------------------------------ |
| `npm run dev`     | Starts Storybook at `localhost:8000                                 |
| `lerna run build` | Build all projects                                                  |
| `lerna publish`   | Publish all changed packages                                        |
| `lerna changed`   | List local packages that have changed since the last tagged release |

## Working directories

| Dir                               | Why it's there                                                                                   |
| :-------------------------------- | :----------------------------------------------------------------------------------------------- |
| [planningcenter/](/planningceter) | Packages published to the [`@planningcenter` npm org](https://www.npmjs.com/org/planningcenter). |

## Configuration

| File/Dir                                     | Why it's there                        |
| :------------------------------------------- | :------------------------------------ |
| [.circleci/config.yml](.circleci/config.yml) | [circleci](https://circleci.com)      |
| [.storybook/](.storybook/)                   | [Storybook](https://storybook.js.org) |
| [lerna.json/](lerna.json)                    | [Storybook](https://lerna.js.org)     |

## Deprecated directories

| File/Dir                         | Why it's there                                                   |
| :------------------------------- | :--------------------------------------------------------------- |
| [cypress/](cypress/)             | Old tests. Some need to be migrated to the new platform          |
| [pages/](pages/)                 | Old Next.js documentation. Some need to be migrated to Storybook |
| [pages_support/](pages_support/) | Old Next.js documentation. Some need to be migrated to Storybook |

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

Requirement: Node 10+

## Setup

```bash
npm i -g lerna
git clone git@github.com:planningcenter/design.git ~/Code/design
cd ~/Code/design
lerna bootstrap # install and link all package-local dependencies
npm run dev
```
