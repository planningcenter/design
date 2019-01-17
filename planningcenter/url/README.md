# @planningcenter/url

A dumb url origin generator in JS.

Builds environment-considered url origins in JS-land, for Planning Center apps.

## Examples

```js
planningcenterurl("development")("api");
// => "http://api.pco.test"

planningcenterurl("staging")("people");
// => "https://accounts.planningcenteronline.com"

planningcenterurl("production")("accounts");
// => "https://people-staging.planningcenteronline.com"
```

Arguments are curried.
You can make a generic env-considered function.

```js
const envURL = planningcenterurl(window.railsEnv);

envURL("api");
```

## In Planning Center Apps

Planning center apps expose the Rails env as the JS global `railsEnv`. Use like so.

```js
planningcenterurl(railsEnv)("api");
```

## Fetching example

```js
fetch(`${planningcenterurl(env)("api")}/people/v2/me`, {
  credentials: "include"
})
  .then(res => res.json())
  .then(json => json.data)
  .then(({ id, attributes }) =>
    this.setState({
      currentUser: {
        id,
        ...attributes
      }
    })
  )
  .catch(err => console.log(err));
```

## Installation

Script tag on Rails

```html
<script type="javascript" src="https://unpkg.com/@planningcenter/url"></script>
<!-- exposed as global `planningcenterurl` -->
```

Webpacker on Rails

```bash
yarn add @planningcenter/url
```

```js
/* global railsEnv */
import pcurl from "@planningcenter/url";

pcurl(railsEnv)("api");
```
