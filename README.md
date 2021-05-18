[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Generic badge](https://img.shields.io/badge/maintained%20by-global%20design-green.svg)](https://shields.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# Design

Global Design supported packages

## Public packages

- [@planningcenter/browserslist-config](planningcenter/browserslist-config)
- [@planningcenter/components](planningcenter/components)
- [@planningcenter/elements](planningcenter/elements)
- [@planningcenter/experimetal](planningcenter/experimental)
- [@planningcenter/finder](planningcenter/finder)
- [@planningcenter/grids](planningcenter/grids)
- [@planningcenter/reach](planningcenter/reach)
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
| [churchcenter/](/churchcenter)    | Packages published to the [`@churchcenter` npm org](https://www.npmjs.com/org/churchcenter).     |

## Configuration

| File/Dir                                     | Why it's there                                                                                     |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| [.storybook/](.storybook/)                   | [Storybook](https://storybook.js.org)                                                              |
| [lerna.json/](lerna.json)                    | [Storybook](https://lerna.js.org)                                                                  |
| [.nvmrc](.nvmrc)                             | [nvm](github.com/nvm-sh/nvm). Support for those that work in multiple node environments            |
| [notes](./notes)                             | Transitional documentation and notes. Retairned as a part of — yet unformalized — decision matrix. |

## Setup

Requirement: Node 10+

```bash
npm i -g lerna
git clone git@github.com:planningcenter/design.git ~/Code/design
cd ~/Code/design
npm install
lerna bootstrap # install and link all package-local dependencies
npm run dev
```

## Links

* (Chromatic dashboard)[https://www.chromatic.com/builds?appId=5dfa692af1d7e20020141e86]


## Team access

* The [DX GitHub Team](https://github.com/orgs/planningcenter/teams/dx/edit) has admin rights to [planningcenter/design](https://github.com/planningcenter/design) and [planningcenter/icons](https://github.com/planningcenter/icons/).
