[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Generic badge](https://img.shields.io/badge/maintained%20by-global%20design-green.svg)](https://shields.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# design

Global Design maintained packages.

## Scripts

```
test: run all the tests
```

## Setup

```bash
git clone git@github.com:planningcenter/design.git
cd design
lerna bootstrap
```

## Packages

- [@planningcenter/avatar](/planningcenter/avatar)

## Structure

`planningcenter/design` is a single repository with many independent, linked NPM packages.
This is frequently referred to as a [Monorepo](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/).
Projects like [babel](https://github.com/babel/babel) and [react](https://github.com/facebook/react) use this structure to manage related but independent packages.

Keeping these independent projects in one repository has one destinct advantage:
included packages can be linked for local, cross-package development.

Here's an example...

Say you're working in `@planningcenter-experimental/finder` and need to add a feature to `@planningcenter/url`. Instead of having find that repo, clone it, make a few blind change, publish, and re-`npm install`, you're able to develop and publish changes to both in one place.

## Publishing

**this section copied from @planningcenter/javascript. out of date.**

[Lerna](https://lernajs.io) manages publishing at the root of the project.
This is big conceptual differenceMono form `1:1` package:repo projects.

A typical workflow looks like this:

- Navigate to your project in the `/packages` directory
- Develop using the scripts setup there
- Navigate back to the root and run `npm lerna publish`
- Follow the the prompts to select a new version appropriate for your changes

Here are additional commands you might find helpful:

| Command                 | Description                                     |
| :---------------------- | :---------------------------------------------- |
| `lerna ls`              | List packages                                   |
| `lerna diff`            | Diff all packages against the last release      |
| `lerna diff [pkg-name]` | Diff a single package against the last release. |
| `lerna publish`         | Publish all packages                            |
| `lerna help`            | See all the other cool things you can do        |
