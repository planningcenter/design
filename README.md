[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Generic badge](https://img.shields.io/badge/maintained%20by-global%20design-green.svg)](https://shields.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# design

Global Design supported packages

## Packages

- [@planningcenter/avatar](/planningcenter/avatar)
- [@planningcenter/browserslist-config](/planningcenter/browserslist-config)
- [@planningcenter/resource-header](/planningcenter/resource-header)
- [@planningcenter/symbol](/planningcenter/symbol)
- [@planningcenter/topbar](/planningcenter/topbar)
- [@planningcenter/typeface](/planningcenter/typeface)
- [@planningcenter/url](/planningcenter/url)
- [@planningcenter/utilities](/planningcenter/utilities)
- [@planningcenter-experimental/button](/planningcenter-experimental/button)
- [@planningcenter-experimental/finder](/planningcenter-experimental/finder)

## Scripts

Common scripts:

| Command                          | Description                                                                        | Options   |
| :------------------------------- | :--------------------------------------------------------------------------------- | :-------- |
| `npm test`                       | Run tests for all packages                                                         | `--watch` |
| `npm run dev`                    | Start development server for [Next.js](https://nextjs.org) app in [/pages](/pages) |           |
| `lerna publish`                  | Publish all changed packages                                                       |           |
| `lerna changed`                  | List local packages that have changed since the last tagged release                |           |
| `lerna create <name> [location]` | Create new package, with `name`, at `location`                                     |           |
| `lerna help`                     | See all the other things you can do with Lerna                                     |           |

## Project navigation

| File/Dir                       | Why it's here                                                                                                                                                              |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pages/`                       | Pages for [Next.js](https://nextjs.org)-generated documentation                                                                                                            |
| `pages-support/`               | Shared components in support of documentation                                                                                                                              |
| `planningcenter/`              | Packages published to the [`@planningcenter` npm org](https://www.npmjs.com/org/planningcenter).<br />**Components design and specified in collaboration with all teams.** |
| `planningcenter-experimental/` | Packages published to the [`@planningcenter` npm org](https://www.npmjs.com/org/planningcenter)<br />**Components design by Global Design for app teams.**                 |
| `babel.config.js/`             | Babel config for Next.js-generated documentation                                                                                                                           |
| `next.config.js/`              | Config for Next.js-generated documentation                                                                                                                                 |

## Setup

```bash
npm i -g lerna
git clone git@github.com:planningcenter/design.git ~/Code/design
cd ~/Code/design
lerna bootstrap # install and link all package-local dependencies
```
