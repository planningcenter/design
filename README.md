[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Generic badge](https://img.shields.io/badge/maintained%20by-global%20design-green.svg)](https://shields.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# design

Global Design maintained packages

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

Most common scripts:

```
| Command                     | Description                                    |
| :-------------------------- | :--------------------------------------------- |
| `npm test`                  | Run tests across packages                      |
| `npm run dev`               | Start dev server for Next.js app in /pages     |
| `lerna list`                | List packages                                  |
| `lerna diff`                | Diff all packages against the last release     |
| `lerna create <name> [loc]` | Diff a single package against the last release |
| `lerna diff [pkg-name]`     | Diff a single package against the last release |
| `lerna publish`             | Publish all changed packages                   |
| `lerna help`                | See all the other things you can do            |
```

## Setup

```bash
git clone git@github.com:planningcenter/design.git ~/Code/design
cd design
lerna bootstrap # install all package-local dependencies and links
```

## Structure

`planningcenter/design` is a single repository with several independent modules —  
[Monorepo](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/), qolloquially.
[Babel](https://github.com/babel/babel) and [React](https://github.com/facebook/react) use this structure to manage related but independent packages.
