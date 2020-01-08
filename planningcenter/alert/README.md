# `@planningcenter/alert`

> **BETA ⚠️** This package currently houses the initial Alert implementation from [People](https://github.com/ministrycentered/people/pull/5465). It should be considered unstable until out of beta. Use at your own risk!

A small wrapper around [sweetalert2](https://sweetalert2.github.io/). This library will eventually use configuration and styles from [@planningcenter/sweetalert2](../sweetalert2) once they are ready.

[![Edit @planningcenter/alert](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/trusting-sanderson-1i8ke?fontsize=14&hidenavigation=1&theme=dark)

## Install

```bash
npm install @planningcenter/alert sweetalert2
```

```bash
yarn add @planningcenter/alert sweetalert2
```

## Interface

The new Alert interface takes cues from console and mirrors sweet alerts in passed arguments, but waves away some of the configuration.

i.e. `Alert.error({ title: "Uh Oh!", text: "Something went wrong", })`

Alert Methods: `confirm`, `confirmCreate`, `confirmDestroy`, `error`, `info`, `success`, and `warn`.

returns a Promise containing

```
{
  value: String, // on submit (confirm)
  dismiss: Boolean, // on cancel
}
```

## Validations

The goal is to create validations that help us more closely align with global design patterns. The is some lightweight validation happening but for sake of time, we are only validating that there is text or html and title passed.

Headline (title) and Body (text) must be present.

reference:
https://planningcenter.design/prompts
