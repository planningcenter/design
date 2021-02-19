# `@planningcenter/sweetalert2`

This package builds SweetAlert2 CSS using the provided Sass Variables in [`variables.css`](https://github.com/sweetalert2/sweetalert2/blob/master/src/variables.scss) and provides optional JavaScript configuration objects that can be dropped into your current SweetAlerts or used to create a localized swal API for your app.

## Demo

### Basic setup

https://codesandbox.io/s/planningcentersweetalert2-swal-v10-9qvwr

### Create better localized ergonamics with API wrappers

https://codesandbox.io/s/planningcentersweetalert2-swal-v10-0qx9i?file=/src/alerts.js

## Usage

### Add this package and its dependencies to your app

```bash
yarn add @planningcenter/sweetalert2 sweetalert2
```

### Import the stylesheet

This stylsheet will handle many of the basic defaults - font styles, colors, padding, margins - outlined in the [specification](https://planningcenter.design/alerts). If you've already implemented the updated icons then this may be all you need to ensure parity with the spec.

```css
/* Use platform-specific import syntax */

/* CSS */
@import "@planningcenter/sweetalert2/css/sweetalert2.css";

/* Sass */
@import "@planningcenter/sweetalert2/css/sweetalert2";
```

#### Caution

Sass `@import` directives are tricky buggers.  
The import statement above will cause problems in Sass files.

Remove the `.css` extension and everything should work as you expect. In Sass, `@import` uses the inclusion of a file extension to determine if you want a Sass import or CSS import. Removing the `.css extension ensures that you get the Sass import.

### JS

#### Basic usage

The stylesheet mentioned above handles most of the basic styles. The following JavaScript config objects provide Planning Center specified icons and button configurations.

```js
// Import SweetAlert2 **see #caution section below**
import Swal from "sweetalert2/dist/sweetalert2";

// Import @planningcenter/sweetalert2 JS config objects
import {
  standardAlertOptions,
  successAlertOptions,
  errorAlertOptions,
  standardConfirmOptions,
  createConfirmOptions,
  destroyConfirmOptions,
} from "@planningcenter/sweetalert2";

// A sample function for firing a sweet alert with provided defaults
function handleDeleteRequest(user) {
  return Swal.fire({
    ...destroyConfirmOptions,
    titleText: `Delete ${user.name}?`,
    text: `This will remove ${user.name} from all Planning Center apps. Their activity will be lost. You cannot un-delete ${user.name}.`,
    confirmButtonText: `Yes, delete ${user.name}!`,
  });
}
```

#### Localized swal API

You may prefer the ergonomics of a localized functions over multiple imports and option spreading.

```js
/*-------- alerts.js --------*/

import Swal from "sweetalert2/dist/sweetalert2";
import {
  standardAlertOptions,
  successAlertOptions,
  errorAlertOptions,
  standardConfirmOptions,
  createConfirmOptions,
  destroyConfirmOptions,
} from "@planningcenter/sweetalert2";

// Create localized functions using .mixin()
// .mixin() provides API flexibility should someone want to use the function argument syntax
export const alert = Swal.mixin(standardAlertOptions);
export const alertSuccess = Swal.mixin(successAlertOptions);
export const alertError = Swal.mixin(errorAlertOptions);
export const confirm = Swal.mixin(standardConfirmOptions);
export const confirmDestroy = Swal.mixin(destroyConfirmOptions);
export const confirmCreate = Swal.mixin(createConfirmOptions);

// Bonus: you may want to alias Swal.fire() as a migration strategy
export const fire = (...args) =>
  Swal.mixin({
    /* old options */
  }).fire(...args);
```

```js
/*-------- component.js --------*/

import * as swal from "./alerts";

// Create a handler using the localized swal API with abstracted defaults
const handleDestroyPersonRecordRequest = (user) => {
  return swal.confirmDestroy.fire({
    titleText: `Delete ${user.name}?`,
    text: `This will remove ${user.name} from all Planning Center apps. Their activity will be lost. You cannot un-delete ${user.name}.`,
    confirmButtonText: `Yes, delete ${user.name}!`,
  });
};

// Note that SweetAlert2's function argument syntax is retained in tandem with the configuration options. Thanks .mixin()
return swal.confirm.fire(
  "This site uses cookies",
  "We use cookies to store your personal preferences. Please accept use of cookies for optimal performance."
);

// The aliased Swal.fire() method allows for current swals to function normally during migration while consuming the provided stylesheet
return swal.fire({
  icon: "warning",
  titleText: "Hold On!",
  text: `Are you sure you want to remove this item?`,
  confirmButtonColor: "#e66654",
  confirmButtonText: "Yes, remove",
  showCancelButton: true,
});
```

### Caution

The default export of SweetAlert2 injects a stylesheet. The injected stylesheet clobbers the themed stylesheets from this library.

To import just the JavaScript, use the nested import path `"sweetalert2/dist/sweetalert2"`. This ensures that you get _only_ the JavaScript.

## Further Reading

### SweetAlert2

- [SweetAlert2 documentation](https://sweetalert2.github.io)
- [SweetAlert2 theming documentation](https://sweetalert2.github.io/#themes) and [examples](https://github.com/sweetalert2/sweetalert2-themes)

### Planning Center

- [Planning Center Alert specification on planningcenter.design](https://planningcenter.design/alerts)
- [Planning Center Alert specification in Figma](https://www.figma.com/file/V8Ajrhr3jwzatZvkpqNKaK/Alerts?node-id=0%3A1)
- [Publishing Installation](https://github.com/ministrycentered/publishing/pull/568)

### Code

- [Theme SCSS Source](./src/sweetalert2.scss)
- [Theme JS Source](./src/sweetalert2.js)

---

_suggessted structure for documentation_

# `@planningcenter/sweetalert2`

A Planning Center theme for [SweetAlert2](https://sweetalert2.github.io).

This theme supports products using [SweetAlert2](https://sweetalert2.github.io) at v10 or higher.

In addition to a theme stylesheet, icons and common options are provided via JS objects.

## Install package

## Apply CSS theme

## Apply JS options objects for icons and button colors

## Create convenience functions using mixin() (recommended)

### Using global window.Swal

### Wrapping .fire() for migration ease

## Create an alert facade (not recommended)

Implementing a facade is an option. It's helpful in three cases:

- Switching between SweetAlert\* versions
- Switching between SweetAlert\* and alternative alert library
- Strategic selection/elimination of SweetAlert\* features

The primary downside of a facade is that implementors take on the full burdon of documentation, testing, and implementation.

People implementas [Alert](https://github.com/ministrycentered/people/blob/master/app/javascript/utils/alert/alert.js), which a trasparent facade.

If you implement a facade, implement an opaque facade — not exposing access to the underlying `fire` method. This will prevent it from becoming a [leaky abstraction] where — in an effort to unexposed library features — consumers reach thru the facade to manipulate the dependency directly. This completely eliminates the value of a facade for transitioning from one library/API to another.

If not actively transitioning between libraries, create convenience functions using `mixin` instead.

### Why this theme doesn't expose a facade

Library facades that live behind a module boundary are difficult to maintain in a multi-app ecosystem. It shifts the library dependency from `peerDependency` to `dependency`. This means that a local (app) changes can't be made without library intervention. These interventions might demand consensus from other apps — which is difficult (if not impossible) to get.

Maintaining a `peerDependency` allows apps to retain full local control over local dependencies while utilizing the theme and shared options.
